import { useEffect, useState } from 'react';
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
      const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;

      getTopRatedMovies(topRatedUrl);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Melhores Filmes:</h2>
      <div>
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
