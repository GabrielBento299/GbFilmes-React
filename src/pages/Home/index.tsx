import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';

import MovieCard from '../../components/MovieCard';
import { Container, ContainerMovie, Title } from '../../components/MoviesContainer/styles';
import { MoviesApi } from '../../types/Movie';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
  const [topMovies, setTopMovies] = useState<MoviesApi[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getTopRatedMovies(url: string) {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      setTopMovies(data.results);
    } catch (err) {
      alert('Erro Api');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      const topRatedUrl = `${moviesUrl}top_rated?${apiKey}&language=pt-BR`;

      getTopRatedMovies(topRatedUrl);
    }, 1000);
  }, []);

  return (
    <Container>
      <Title>Melhores filmes</Title>
      <ContainerMovie>
        <Loader isLoading={isLoading} />
        {topMovies.length > 0 && topMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </ContainerMovie>
    </Container>
  );
}
