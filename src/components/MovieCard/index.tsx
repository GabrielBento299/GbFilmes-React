import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MoviesApi } from '../../types/Movie';

interface IMovieCardsProps {
  movie: MoviesApi;
  showLink?: boolean
}

const imageUrl = import.meta.env.VITE_IMG;

export default function MovieCard({ movie, showLink }:IMovieCardsProps) {
  return (
    <div className="Movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar />
        {movie.vote_average}
      </p>

      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
}
