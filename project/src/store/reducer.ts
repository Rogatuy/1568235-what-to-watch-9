import {createReducer} from '@reduxjs/toolkit';
import { ALL_GENRES } from '../const';
import { films } from '../mocks/films';
import { State } from '../types/state';
import { changeGenre } from './action';

const initialState: State = {
  genre: ALL_GENRES,
  films: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
});

export {reducer};
