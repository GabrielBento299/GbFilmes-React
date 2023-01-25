import {
  BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill,
} from 'react-icons/bs';

// eslint-disable-next-line import/no-extraneous-dependencies
import { format, parseISO } from 'date-fns';

import { MoviesApi } from '../../types/Movie';
import { Container } from './styles';

interface IMovieDetail {
  movie: MoviesApi;
  tv?: MoviesApi;
}

const imageUrl = import.meta.env.VITE_IMG;

export default function MovieDetail({ movie, tv } : IMovieDetail) {
  return (
    <Container>
      <img src={imageUrl + movie.poster_path} alt={movie.title} />

      <div>
        <div className="info">
          <h3> <BsFillFileEarmarkTextFill /> Titulo:</h3>
          {tv?.original_name ? (tv?.original_name) : (<p>{movie.title}</p>)}
        </div>

        <div className="info">
          <h3> <BsFillFileEarmarkTextFill /> Subtitulo:</h3>
          <p>{movie.tagline}</p>
        </div>

        <div className="info">
          <h3> <BsFillFileEarmarkTextFill /> Sinopse:</h3>
          <p>{movie.overview}</p>
        </div>

        <div className="info">
          <h3> <BsFillFileEarmarkTextFill /> Gêneros:</h3>
          <p>{movie.genres.map((genre) => (<strong key={genre.name}>{genre.name}</strong>))}</p>
        </div>

        <div className="info">
          <h3> <BsFillFileEarmarkTextFill /> Popularidade:</h3>
          <p>{movie.popularity}%</p>
        </div>

        <div className="info">
          <h3> <BsFillFileEarmarkTextFill /> Data de lançamento:</h3>
          <p>{format(parseISO(movie.release_date), 'dd/MM/yyyy')}</p>
        </div>

        {movie.runtime && (
          <div className="info">
            <h3> <BsHourglassSplit /> Duração:</h3>
            <p>{movie.runtime}: Minutos</p>
          </div>
        )}
      </div>
    </Container>
  );
}
