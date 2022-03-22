import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/action';
import { Movies } from '../../types/Movie';
import classNames from 'classnames';
import { ALL_GENRES } from '../../const';

type ListOfGenreProps = {
  films: Movies;
}

function ListOfGenre({films}: ListOfGenreProps): JSX.Element {
  const genre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  const genres = films.map((film) => film.genre);
  genres.unshift(ALL_GENRES);
  const allGenres = [...new Set(genres)];

  return (
    <ul className="catalog__genres-list">
      {allGenres.map((genreItem) => (
        <li
          key={genreItem}
          className={classNames('catalog__genres-item', {
            'catalog__genres-item--active': genreItem === genre,
          })}
          onClick={() => dispatch(changeGenre())}
        >
          <Link to="#" className="catalog__genres-link">{genreItem}</Link>
        </li>
      ))}
    </ul>
  );
}

export default ListOfGenre;
