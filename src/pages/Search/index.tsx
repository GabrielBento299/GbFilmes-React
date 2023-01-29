import { useSearchParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import MovieCard from '../../components/MovieCard';
import { Container, ContainerMovie, Title } from '../../components/MoviesContainer/styles';
import { FilmMovieContext } from '../../Contexts/FilmMovie';
import Loader from '../../components/Loader';

const searchUrl = import.meta.env.VITE_SEARCH;
const searchUrlTV = import.meta.env.VITE_SEARCH_TV;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Search() {
  const [searchParams] = useSearchParams();
  const query: string | null = searchParams.get('q');

  const { isLoading, getSearch, resultsApi } = useContext(FilmMovieContext);

  useEffect(() => {
    const searchWithQueryURL = `https://api.themoviedb.org/3/search/movie/?${apiKey}&language=pt-BR&query=${query}`;

    getSearch(searchWithQueryURL);
    // const searchWithQueryURL = `${searchUrl}?${apiKey}&language=pt-BR&query=${query}`;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <Container>
      <Loader isLoading={isLoading} />
      {resultsApi.length > 0 && (
        // eslint-disable-next-line react/no-unescaped-entities
        <Title>Resultados para "{query}"</Title>
      )}
      <ContainerMovie>
        {resultsApi.length > 0 && resultsApi.map((movie) => (
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
