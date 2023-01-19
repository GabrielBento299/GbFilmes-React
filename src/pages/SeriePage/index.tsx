import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MoviesApi } from '../../types/Movie';
import { Container, ContainerMovie, Title } from '../../components/MoviesContainer/styles';
import MovieDetail from '../../components/MovieDetail';

const moviesUrlTv = import.meta.env.VITE_API_TV;
const apiKey = import.meta.env.VITE_API_KEY;

export default function SeriePage() {
  const { id } = useParams();

  const [tv, setTv] = useState<MoviesApi>();

  async function getTv(url: string) {
    const response = await fetch(url);
    const data = await response.json();

    setTv(data);
  }

  useEffect(() => {
    const serieUrl = `${moviesUrlTv}${id}?${apiKey}&language=pt-BR`;
    getTv(serieUrl);
  }, [id]);

  return (
    <div>
      {tv && (
        <Container>
          <Title>Sobre o filme: {tv?.original_name}</Title>
          <ContainerMovie />
        </Container>
      )}
    </div>
  );
}
