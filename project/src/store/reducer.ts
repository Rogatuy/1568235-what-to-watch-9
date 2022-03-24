import {createReducer} from '@reduxjs/toolkit';
import { ALL_GENRES, FILMS_STEP } from '../const';
import { films } from '../mocks/films';
import { State } from '../types/state';
import { changeGenre, showMoreClick } from './action';

const initialState: State = {
  genre: ALL_GENRES,
  films: films,
  filmsCount: FILMS_STEP,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.filmsCount = FILMS_STEP;
    })
    .addCase(showMoreClick, (state) => {
      state.filmsCount += FILMS_STEP;
    });
});

export {reducer};
