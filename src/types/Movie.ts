export type MoviesApi = {
  id: number;
  title: string;
  adult: boolean;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  budget: number;
  revenue: number;
  runtime: number;
  overview: string;
  release_date: string;
  tagline: string;
  genres: {
    map(arg0: (genre: any) => JSX.Element): import('react').ReactNode;
    name: string;
  }
  popularity: number;
  original_name: string;
  media_type: string;
  first_air_date: string;
};

export type MediaType = 'movie' | 'tv';
