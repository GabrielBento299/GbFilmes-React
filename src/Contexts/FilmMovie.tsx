import { createContext, useState } from 'react';

interface FilmMovieProps {
  children: React.ReactNode;
}

interface IFilmMovieContextData {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

export const FilmMovieContext = createContext<IFilmMovieContextData>({} as IFilmMovieContextData);

export function FilmMovieContextProvider({ children }: FilmMovieProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FilmMovieContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </FilmMovieContext.Provider>
  );
}
