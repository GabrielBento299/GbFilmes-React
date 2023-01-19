import { id } from 'date-fns/locale';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const searchUrl = import.meta.env.VITE_SEARCH;
const searchUrlTV = import.meta.env.VITE_SEARCH;

export function typeRequest(type:string, query: string) {
  if (type === 'tv') {
    const teste = `https://api.themoviedb.org/3/search/tv/?${apiKey}&language=pt-BR&query=${query}`;
  } if (type === 'movie') {
    const teste = `https://api.themoviedb.org/3/search/movie/?${apiKey}&language=pt-BR&query=${query}`;
  }
}
