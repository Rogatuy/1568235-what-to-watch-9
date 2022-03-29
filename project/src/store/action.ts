import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Movie, Movies } from '../types/Movie';

export const changeGenre = createAction('main/changeGenre', (value: string) => ({
  payload: value,
}));

export const showMoreClick = createAction('main/showMoreClick');

export const loadFilms = createAction<Movies>('data/loadFilms');

export const loadPromoFilm = createAction<Movie>('data/loadPromoFilm');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');

export const loadFilmFull = createAction<Movie>('data/loadFilmFull/id');
