import { useContext, useEffect } from 'react';
import { Container, ContainerMovie, Title } from '../../components/MoviesContainer/styles';
import Loader from '../../components/Loader';
import MovieCard from '../../components/MovieCard';
import { FilmMovieContext } from '../../Contexts/FilmMovie';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Movies() {
  const { isLoading, allMovies, getMovies } = useContext(FilmMovieContext);

  useEffect(() => {
    const allMoviesUrl = `${moviesUrl}top_rated?${apiKey}&language=pt-BR`;
    getMovies(allMoviesUrl);
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
