import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard';
import { MoviesApi } from '../../types/Movie';
import { Container, ContainerMovie, Title } from '../../components/MoviesContainer/styles';

const searchUrl = import.meta.env.VITE_SEARCH;
const searchUrlTV = import.meta.env.VITE_SEARCH_TV;
const apiKey = import.meta.env.VITE_API_KEY;

interface ISearch {
  type: string;
}

export default function Search() {
  const [searchParams] = useSearchParams();
  const query: string | null = searchParams.get('q');

  const [movies, setMovies] = useState<MoviesApi[]>([]);

  async function getSearchMovies(url :string) {
    const response = await fetch(url);
    const data = await response.json();

    setMovies(data.results);
  }

  useEffect(() => {
    const searchWithQueryURL = `https://api.themoviedb.org/3/search/movie/?${apiKey}&language=pt-BR&query=${query}`;

    getSearchMovies(searchWithQueryURL);

    // const searchWithQueryURL = `${searchUrl}?${apiKey}&language=pt-BR&query=${query}`;
  }, [query]);

  return (
    <Container>
      {movies.length > 0 && (
        <Title>Sua busca para {query} Resultados:{movies.length}</Title>
      )}

      <ContainerMovie>
        {movies.length > 0 ? movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        )) : <h1>Sem resultados para <strong>{query}</strong></h1>}
      </ContainerMovie>
    </Container>
  );
}
