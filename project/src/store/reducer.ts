import {createReducer} from '@reduxjs/toolkit';
import { ALL_GENRES, FILMS_STEP, AuthorizationStatus } from '../const';
import { State } from '../types/state';
import { changeGenre, showMoreClick, loadFilms, requireAuthorization, loadPromoFilm, loadFilmFull } from './action';

const initialState: State = {
  genre: ALL_GENRES,
  films: [],
  filmsCount: FILMS_STEP,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  promoFilm: null,
  filmFull: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.filmsCount = FILMS_STEP;
    })
    .addCase(showMoreClick, (state) => {
      state.filmsCount += FILMS_STEP;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadFilmFull, (state, action) => {
      state.filmFull = action.payload;
    });
});

export {reducer};
