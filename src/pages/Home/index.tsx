import { useContext, useEffect, useState } from 'react';
import Loader from '../../components/Loader';

import MovieCard from '../../components/MovieCard';
import { Container, ContainerMovie, Title } from '../../components/MoviesContainer/styles';
import { FilmMovieContext } from '../../Contexts/FilmMovie';
import { MoviesApi } from '../../types/Movie';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
  const { isLoading, setIsLoading } = useContext(FilmMovieContext);
  const [AllMoviesTv, setAllMoviesTv] = useState<MoviesApi[]>([]);

  async function getTopRatedMovies(url: string) {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
