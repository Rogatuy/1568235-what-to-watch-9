import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { commentsData } from './comments-data/comments-data';
import { favoriteFilmsData } from './favorite-films-data/favorite-films-data';
import { filmFullData } from './film-full-data/film-full-data';
import { filmsData } from './films-data/films-data';
import { postCommentData } from './post-comment-data/post-comment-data';
import { promoFilmData } from './promo-film-data/promo-film-data';
import { reviewSendStatusData } from './review-send-status/review-send-status';
import { selectedGenre } from './selected-genre/selected-genre';
import { similarFilmsData } from './similar-films-data/similar-films-data';
import { getUserData } from './user-data/user-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.user]: userProcess.reducer,
  [NameSpace.selectedGenre]: selectedGenre.reducer,
  [NameSpace.filmsData]: filmsData.reducer,
  [NameSpace.commentsData]: commentsData.reducer,
  [NameSpace.promoFilmData]: promoFilmData.reducer,
  [NameSpace.similarFilmsData]: similarFilmsData.reducer,
  [NameSpace.postUserReview]: postCommentData.reducer,
  [NameSpace.userData]: getUserData.reducer,
  [NameSpace.reviewSendStatus]: reviewSendStatusData.reducer,
  [NameSpace.myList]: favoriteFilmsData.reducer,
  [NameSpace.filmFullData]: filmFullData.reducer,
});
