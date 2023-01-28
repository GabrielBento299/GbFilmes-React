import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';

import MovieCard from '../../components/MovieCard';
import { Container, ContainerMovie, Title } from '../../components/MoviesContainer/styles';
import { MoviesApi } from '../../types/Movie';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
  const [AllMoviesTv, setAllMoviesTv] = useState<MoviesApi[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getTopRatedMovies(url: string) {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);

      setAllMoviesTv(data.results);
    } catch (err) {
      alert('Erro Api');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const topRatedUrl = `https://api.themoviedb.org/3/trending/all/week?${apiKey}&language=pt-BR`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <Container>
      <Title>Treding</Title>
      <ContainerMovie>
        <Loader isLoading={isLoading} />
        {AllMoviesTv.length > 0 && AllMoviesTv.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            typeLink="all"
          />
        ))}
      </ContainerMovie>
    </Container>
  );
}
