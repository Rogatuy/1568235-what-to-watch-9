import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { addFavoriteFilm } from '../../store/api-actions';
import { getFavoriteFilmsList } from '../../store/favorite-films-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

import { Movie } from '../../types/movie';

type AddToMyListButtonProps = {
  filmId: number,
}

export default function AddToMyListButton({filmId}: AddToMyListButtonProps): JSX.Element {
  const favoriteFilms = useAppSelector(getFavoriteFilmsList);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [filmStatus, setFilmStatus] = useState(0);

  const handleToFavorite = (id: number, status: number) => {
    store.dispatch(addFavoriteFilm({id, status}));
  };

  useEffect(() => {
    if (!favoriteFilms) {
      return;
    }
    setFilmStatus(favoriteFilms.find((item: Movie) => item.id === filmId) ? 1 : 0);
  }, [filmId, favoriteFilms]);

  return(
    <button
      onClick={() => {
        handleToFavorite(filmId, 1 - filmStatus);
      }}
      className="btn btn--list film-card__button"
      type="button"
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={authorizationStatus === 'AUTH' && filmStatus ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
    </button>
  );
}
