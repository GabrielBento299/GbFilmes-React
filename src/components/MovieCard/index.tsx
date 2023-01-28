/* eslint-disable @typescript-eslint/quotes */
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MoviesApi, Serieapi } from '../../types/Movie';
import { Container } from './styles';

interface IMovieCardsProps {
  movie: MoviesApi;
  showLink?: boolean;
  typeLink? : string;
}

const imageUrl = import.meta.env.VITE_IMG;

export default function MovieCard({
  movie, typeLink, showLink = true,
}: IMovieCardsProps) {
  return (
    <Container>
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <div className="info">
        {movie.title && (<h2>{movie.title}</h2>)}
        {movie.original_name && (<h2>{movie.original_name}</h2>)}
        <span>
          <FaStar /> {movie.vote_average} {movie.vote_average === 1 ? 'Avaliação' : 'Avaliações'}
        </span>
        {typeLink === 'all' && (showLink && <Link to={`/all/${movie.id}`}>Detalhes</Link>)}
        {typeLink === 'movie' && (showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>)}
        {typeLink === 'serie' && (showLink && <Link to={`/serie/${movie.id}`}>Detalhes</Link>)}
        {movie.media_type}
      </div>
    </Container>
  );
}
