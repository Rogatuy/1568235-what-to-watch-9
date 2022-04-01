import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoriteFilmsData } from '../../types/state';

const initialState: FavoriteFilmsData = {
  myList: [],
};

export const favoriteFilmsData = createSlice({
  name: NameSpace.myList,
  initialState,
  reducers: {
    loadMyList: (state, action) => {
      state.myList = action.payload;
    },
  },
});

export const {loadMyList} = favoriteFilmsData.actions;
