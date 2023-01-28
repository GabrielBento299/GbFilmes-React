import { useEffect, useState } from 'react';
import { Container, ContainerMovie, Title } from '../../components/MoviesContainer/styles';
import { MoviesApi } from '../../types/Movie';
import Loader from '../../components/Loader';
import MovieCard from '../../components/MovieCard';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Movies() {
  const [allMovies, setAllMovies] = useState<MoviesApi[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getAllMovies(url: string) {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      setAllMovies(data.results);
    } catch (err) {
      alert('Erro Api');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const allMoviesUrl = `${moviesUrl}top_rated?${apiKey}&language=pt-BR`;
    getAllMovies(allMoviesUrl);
  }, []);
  return (

    <Container>
      <Title>Melhores filmes</Title>
      <ContainerMovie>
        <Loader isLoading={isLoading} />
        {allMovies.length > 0 && allMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            typeLink="movie"
          />
        ))}
      </ContainerMovie>
    </Container>
  );
}
