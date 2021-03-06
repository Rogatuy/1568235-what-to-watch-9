import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmFull} from '../../types/state';

const initialState: FilmFull = {
  filmFull: {
    id: 0,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: [''],
    runTime: 0,
    genre: '',
    released: 0,
    isFavorite: false,
  },
  isDataLoaded: false,
};

export const filmFullData = createSlice({
  name: NameSpace.FilmFullData,
  initialState,
  reducers: {
    loadFilmFull: (state, action) => {
      state.filmFull = action.payload;
      state.isDataLoaded = true;
    },
    toggleLoaderFilmFull: (state, {payload}) => {
      state.isDataLoaded = payload;
    },
  },
});

export const {loadFilmFull} = filmFullData.actions;
export const {toggleLoaderFilmFull} = filmFullData.actions;
