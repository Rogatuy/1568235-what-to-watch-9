import { AuthorizationStatus } from '../const.js';
import { store } from '../store/index.js';
import { Movie, Movies } from './Movie.js';

export type State = {
  genre: string;
  films: Movies;
  filmsCount: number;
  promoFilm:  Movie | null;
  isDataLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
  filmFull: Movie | null;
};

export type AppDispatch = typeof store.dispatch;
