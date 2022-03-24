import { store } from '../store/index.js';
import { Movies } from './Movie.js';

export type State = {
  genre: string;
  films: Movies;
  filmsCount: number;
};

export type AppDispatch = typeof store.dispatch;
