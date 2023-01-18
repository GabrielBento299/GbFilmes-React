import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MoviesApi } from '../../types/Movie';
import { Container, ContainerMovie, Title } from '../../components/MoviesContainer/styles';
import MovieDetail from '../../components/MovieDetail';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovies] = useState<MoviesApi>();

  async function getMovie(url: string) {
    const response = await fetch(url);
    const data = await response.json();

    setMovies(data);
  }

  useEffect(() => {
    const movieUrl = `${moviesUrl}${id}?${apiKey}&language=pt-BR`;
    getMovie(movieUrl);
  }, [id]);

  return (
    <div>
      {movie && (
      <Container>
        <Title>Sobre o filme: {movie.title}</Title>
        <ContainerMovie>
          <MovieDetail movie={movie} />
        </ContainerMovie>
      </Container>
      )}
    </div>
  );
}
