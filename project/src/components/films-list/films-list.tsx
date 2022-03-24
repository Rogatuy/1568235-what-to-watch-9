import CardMovie from '../card-movie/card-movie';
import {Movies} from '../../types/Movie';
import { useAppSelector } from '../../hooks';
import { ALL_GENRES } from '../../const';

type FilmsListProps = {
  films: Movies;
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  const genre = useAppSelector((state) => state.genre);
  const choosingFilms = genre === ALL_GENRES
    ? films
    : films.filter((film) => film.genre === genre);
  return (
    <div className="catalog__films-list">
      {choosingFilms.map((film) => (
        <CardMovie
          key={film.id}
          film={film}
        />
      ))}
    </div>
  );
}

export default FilmsList;
