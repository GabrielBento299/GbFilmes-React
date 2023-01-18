import { useEffect, useState } from 'react';
import { MoviesApi } from '../../types/Movie';
import { Container, ContainerMovie, Title } from '../../components/MoviesContainer/styles';
import MovieCard from '../../components/MovieCard';
import Loader from '../../components/Loader';

const seriesUrl = import.meta.env.VITE_API_TV;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Serie() {
  const [series, setSeries] = useState<MoviesApi[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getSeries(url: string) {
    try {
      setIsLoading(true);

      const response = await fetch(url);
      const data = await response.json();

      setSeries(data.results);
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      const topSeriesUrl = `${seriesUrl}top_rated?${apiKey}&language=pt-BR`;

      getSeries(topSeriesUrl);
    }, 2000);
  }, []);

  return (
    <div>
      <Container>
        <Title>Melhores Series</Title>
        <ContainerMovie>
          <Loader isLoading={isLoading} />
          {series.length > 0 && series.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </ContainerMovie>
      </Container>
    </div>
  );
}
