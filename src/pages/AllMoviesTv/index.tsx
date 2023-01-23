import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesApi } from '../../types/Movie';
import { Container, ContainerMovie, Title } from '../../components/MoviesContainer/styles';

const allUrl = import.meta.env.VITE_API_ALL;
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
    const allResults = `https://api.themoviedb.org/3/tv/${id}?${apiKey}&language=pt-BR`;

    getAll(allResults);
  }, [id]);

  return (
    <div>
      {all && (
      <Container>
        <Title> Sobre o filme{all.original_name} {all.title}</Title>
        <ContainerMovie />
      </Container>
      )}
    </div>
  );
}
