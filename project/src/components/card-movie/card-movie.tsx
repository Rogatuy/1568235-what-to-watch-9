import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type CardMovieProps = {
  id: number,
  movieName: string;
  movieImage: string;
  onHover: (id: number) => void;
}

function CardMovie({movieName, movieImage, id, onHover}: CardMovieProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => onHover(id)}>
      <div className="small-film-card__image">
        <img src={`${movieImage}`} alt={movieName} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}${id}`}>{movieName}</Link>
      </h3>
    </article>);
}

export default CardMovie;
