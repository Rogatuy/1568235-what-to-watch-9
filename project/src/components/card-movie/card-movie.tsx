import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import { Movie } from '../../types/Movie';
import VideoPlayer from '../video-player/video-player';
import { loadFilmFull } from '../../store/action';
import { useAppDispatch } from '../../hooks';

type CardMovieProps = {
  film: Movie;
  isActive: boolean
  onHover: (id: number | null) => void,
}

function CardMovie({film, isActive, onHover}: CardMovieProps): JSX.Element {
  const {id} = film;
  const dispatch = useAppDispatch();

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onHover(id)}
      onMouseOut={() => onHover(null)}
      onClick={() => dispatch(loadFilmFull(film))}
    >
      <Link to={`${AppRoute.Film}${film.id}`}>
        <div className="small-film-card__image">
          <VideoPlayer
            film={film}
            isPlaying={isActive}
            poster={film.previewImage}
            src={film.previewVideoLink}
          />
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}${film.id}`}>{film.name}</Link>
      </h3>
    </article>);
}

export default CardMovie;
