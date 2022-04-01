import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Movies } from '../../types/movie';
import classNames from 'classnames';
import { ALL_GENRES, MAX_GENRES } from '../../const';
import { changeGenre } from '../../store/selected-genre/selected-genre';
import { getSelectedGenre } from '../../store/selected-genre/selectors';

type ListOfGenreProps = {
  films: Movies;
}

function ListOfGenre({films}: ListOfGenreProps): JSX.Element {
  const genre = useAppSelector(getSelectedGenre);
  const dispatch = useAppDispatch();


  const genres = films.map((film) => film.genre);
  const allGenres = [ALL_GENRES, ...genres];

  const allGenresSet = [...new Set(allGenres)];

  return (
    <ul className="catalog__genres-list">
      {allGenresSet.slice(0, MAX_GENRES).map((genreItem) => (
        <li
          key={genreItem}
          className={classNames('catalog__genres-item', {
            'catalog__genres-item--active': genreItem === genre,
          })}
          onClick={() => dispatch(changeGenre(genreItem))}
        >
          <Link to="#" className="catalog__genres-link">{genreItem}</Link>
        </li>
      ))}
    </ul>
  );
}


export default ListOfGenre;
