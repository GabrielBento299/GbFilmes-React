import { useContext, useEffect, useState } from 'react';
import Loader from '../../components/Loader';

import MovieCard from '../../components/MovieCard';
import { Container, ContainerMovie, Title } from '../../components/MoviesContainer/styles';
import { FilmMovieContext } from '../../Contexts/FilmMovie';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
  const { isLoading, allMoviesTv, getAllMoviesTv } = useContext(FilmMovieContext);

  useEffect(() => {
    const topRatedUrl = `https://api.themoviedb.org/3/trending/all/week?${apiKey}&language=pt-BR`;
    getAllMoviesTv(topRatedUrl);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title>Treding</Title>
      <ContainerMovie>
        <Loader isLoading={isLoading} />
        {allMoviesTv.length > 0 && allMoviesTv.map((movie) => (
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
