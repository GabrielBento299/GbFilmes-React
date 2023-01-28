import { useSearchParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import MovieCard from '../../components/MovieCard';
import { MoviesApi } from '../../types/Movie';
import { Container, ContainerMovie, Title } from '../../components/MoviesContainer/styles';
import { FilmMovieContext } from '../../Contexts/FilmMovie';
import Loader from '../../components/Loader';

const searchUrl = import.meta.env.VITE_SEARCH;
const searchUrlTV = import.meta.env.VITE_SEARCH_TV;
const apiKey = import.meta.env.VITE_API_KEY;

interface ISearch {
  type: string;
}

export default function Search() {
  const [searchParams] = useSearchParams();
  const query: string | null = searchParams.get('q');

  const { isLoading, setIsLoading } = useContext(FilmMovieContext);

  const [movies, setMovies] = useState<MoviesApi[]>([]);

  async function getSearchMovies(url :string) {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    setMovies(data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    const searchWithQueryURL = `https://api.themoviedb.org/3/search/movie/?${apiKey}&language=pt-BR&query=${query}`;

    getSearchMovies(searchWithQueryURL);

    // const searchWithQueryURL = `${searchUrl}?${apiKey}&language=pt-BR&query=${query}`;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <Container>
      <Loader isLoading={isLoading} />

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
