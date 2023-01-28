import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesApi } from '../../types/Movie';
import { Container, ContainerMovie, Title } from '../../components/MoviesContainer/styles';
import { FilmMovieContext } from '../../Contexts/FilmMovie';
import Loader from '../../components/Loader';
import MovieCard from '../../components/MovieCard';
import MovieDetail from '../../components/MovieDetail';

const apiKey = import.meta.env.VITE_API_KEY;

export default function AllMoviesTv() {
  const { id } = useParams();

  const [all, setAll] = useState<MoviesApi>();

  async function getAll(url: string) {
    const response = await fetch(url);
    const data = await response.json();

    setAll(data);
  }

  useEffect(() => {
    const allResults = `https://api.themoviedb.org/3/movie/${id}?${apiKey}&language=pt-BR`;
    getAll(allResults);
  }, [id]);

  return (
    <div>
      {all && (
      <Container>
        <Title> Sobre o filme{all.original_name} {all.title}</Title>
        <ContainerMovie>
          <MovieDetail movie={all} />
        </ContainerMovie>
      </Container>
      )}
    </div>
  );
}
