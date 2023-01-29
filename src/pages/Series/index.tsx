import { useEffect, useState, useContext } from 'react';
import { MoviesApi } from '../../types/Movie';
import { Container, ContainerMovie, Title } from '../../components/MoviesContainer/styles';
import MovieCard from '../../components/MovieCard';
import Loader from '../../components/Loader';
import { FilmMovieContext } from '../../Contexts/FilmMovie';

const seriesUrl = import.meta.env.VITE_API_TV;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Serie() {
  const { isLoading, allSeries, getSeries } = useContext(FilmMovieContext);

  useEffect(() => {
    setTimeout(() => {
      const topSeriesUrl = `${seriesUrl}top_rated?${apiKey}&language=pt-BR`;

      getSeries(topSeriesUrl);
    }, 2000);
  }, []);

  return (
    <div>
      <Container>
        <Title>Melhores Series</Title>
        <ContainerMovie>
          <Loader isLoading={isLoading} />
          {allSeries.length > 0 && allSeries.map((serie) => (
            <MovieCard
              key={serie.id}
              movie={serie}
              typeLink="serie"
            />
          ))}
        </ContainerMovie>
      </Container>
    </div>
  );
}
