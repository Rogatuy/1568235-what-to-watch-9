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
  const allGenres = [ALL_GENRES, ...genres];

  const allGenresSet = [...new Set(allGenres)];

  return (
    <ul className="catalog__genres-list">
      {allGenresSet.map((genreItem) => (
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
