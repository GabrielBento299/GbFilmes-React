import { useEffect, useState } from 'react';
import { Container, MoviesContainer } from './styles';

import MovieCard from '../../components/MovieCard';
import { MoviesApi } from '../../types/Movie';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
  const [topMovies, setTopMovies] = useState<MoviesApi[]>([]);

  async function getTopRatedMovies(url: string) {
    const response = await fetch(url);
    const data = await response.json();

    setTopMovies(data.results);
  }

  useEffect(() => {
    setTimeout(() => {
      const topRatedUrl = `${moviesUrl}top_rated?${apiKey}&language=pt-BR`;

      getTopRatedMovies(topRatedUrl);
    }, 1000);
  }, []);

  return (
    <div>
      <Container>
        <h2>Melhores Filmes:</h2>
        <MoviesContainer>
          {topMovies.length === 0 && <p>Carregando...</p>}
          {topMovies.length > 0 && topMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </MoviesContainer>
      </Container>
    </div>
  );
}
