import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { SelectedGenre } from '../../types/state';

const initialState: SelectedGenre = {
  selectedGenre: 'All genres',
};

export const selectedGenre = createSlice({
  name: NameSpace.selectedGenre,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
  },
});

export const {changeGenre} = selectedGenre.actions;
