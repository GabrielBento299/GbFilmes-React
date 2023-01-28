import { createContext, useState, useEffect } from 'react';
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
}

const apiKey = import.meta.env.VITE_API_KEY;

export const FilmMovieContext = createContext<IFilmMovieContextData>({} as IFilmMovieContextData);

export function FilmMovieContextProvider({ children }: FilmMovieProps) {
  const [allMoviesTv, setAllMoviesTv] = useState<MoviesApi[]>([]);
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

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FilmMovieContext.Provider value={{
      isLoading,
      setIsLoading,
      allMoviesTv,
      setAllMoviesTv,
      getAllMoviesTv,
    }}
    >
      {children}
    </FilmMovieContext.Provider>
  );
}
