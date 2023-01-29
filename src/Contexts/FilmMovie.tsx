import { createContext, useState } from 'react';
import { MoviesApi } from '../types/Movie';

interface FilmMovieProps {
  children: React.ReactNode;
}

interface IFilmMovieContextData {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  allMoviesTv: MoviesApi[];
  setAllMoviesTv: (value: MoviesApi[]) => void;
  getAllMoviesTv: (url: string) => void;
  resultsType: string[];
  allMovies: MoviesApi[];
  setAllMovies: (value: MoviesApi[]) => void;
  getMovies: (url: string) => void;
  allSeries: MoviesApi[];
  setAllSeries: (value: MoviesApi[]) => void;
  getSeries: (url: string) => void;
}

const apiKey = import.meta.env.VITE_API_KEY;

export const FilmMovieContext = createContext<IFilmMovieContextData>({} as IFilmMovieContextData);

export function FilmMovieContextProvider({ children }: FilmMovieProps) {
  const [allMoviesTv, setAllMoviesTv] = useState<MoviesApi[]>([]);
  const [allMovies, setAllMovies] = useState<MoviesApi[]>([]);
  const [allSeries, setAllSeries] = useState<MoviesApi[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  async function getAllMoviesTv(url: string) {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      setAllMoviesTv(data.results);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function getMovies(url: string) {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      setAllMovies(data.results);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function getSeries(url: string) {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      setAllSeries(data.results);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  const resultsType = allMoviesTv.map((movie) => movie.media_type);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FilmMovieContext.Provider value={{
      isLoading,
      setIsLoading,
      allMoviesTv,
      setAllMoviesTv,
      getAllMoviesTv,
      resultsType,
      allMovies,
      setAllMovies,
      getMovies,
      allSeries,
      setAllSeries,
      getSeries,
    }}
    >
      {children}
    </FilmMovieContext.Provider>
  );
}
