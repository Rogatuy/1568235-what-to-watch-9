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
import { serverStatusData } from './server-status/server-status';
import { similarFilmsData } from './similar-films-data/similar-films-data';
import { getUserData } from './user-data/user-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.SelectedGenre]: selectedGenre.reducer,
  [NameSpace.FilmsData]: filmsData.reducer,
  [NameSpace.CommentsData]: commentsData.reducer,
  [NameSpace.PromoFilmData]: promoFilmData.reducer,
  [NameSpace.SimilarFilmsData]: similarFilmsData.reducer,
  [NameSpace.PostUserReview]: postCommentData.reducer,
  [NameSpace.UserData]: getUserData.reducer,
  [NameSpace.ReviewSendStatus]: reviewSendStatusData.reducer,
  [NameSpace.MyList]: favoriteFilmsData.reducer,
  [NameSpace.FilmFullData]: filmFullData.reducer,
  [NameSpace.ServerStatus]: serverStatusData.reducer,
});
