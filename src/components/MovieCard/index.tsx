import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MoviesApi } from '../../types/Movie';
import { Container } from './styles';

interface IMovieCardsProps {
  movie: MoviesApi;
  showLink?: boolean;
}

const imageUrl = import.meta.env.VITE_IMG;

export default function MovieCard({ movie, showLink = true }:IMovieCardsProps) {
  return (
    <Container>
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <div className="info">
        {movie.title && (<h2>{movie.title}</h2>)}
        {movie.original_name && (<h2>{movie.original_name}</h2>)}
        <span>
          <FaStar /> {movie.vote_average} {movie.vote_average === 1 ? 'Avaliação' : 'Avaliações'}
        </span>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
      </div>
    </Container>
  );
}
