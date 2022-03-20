import CardMovie from '../card-movie/card-movie';
import {Movies} from '../../types/Movie';

type FilmsListProps = {
  films: Movies;
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <CardMovie
          key={film.id}
          film={film}
        />
      ))}
    </div>
  );
}

export default FilmsList;
