import { store } from '../store/index.js';
import { Movies } from './Movie.js';

export type State = {
  genre: string;
  films: Movies;
};

export type AppDispatch = typeof store.dispatch;
