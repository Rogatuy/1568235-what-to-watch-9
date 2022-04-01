import { AuthorizationStatus } from '../const.js';
import { store } from '../store/index.js';
import { CommentPost, Comments } from './comments.js';
import { Movie, Movies } from './movie.js';
import { ReviewSendStatus, UserLoginData } from './user-data.js';

// export type State = {
//   genre: string;
//   films: Movies;
//   promoFilm:  Movie | null;
//   isDataLoaded: boolean;
//   isFilmLoaded: boolean;
//   authorizationStatus: AuthorizationStatus;
//   filmFull: Movie | null;
//   similarFilms: Movies;
//   comments: Comments;
//   myList: Movies;
// };

export type AppDispatch = typeof store.dispatch;

export type CommentsData = {
  comments: Comments,
  isDataLoaded: boolean,
};

export type FavoriteFilmsData = {
  myList: Movies,
};

export type FilmsData = {
  films: Movies,
  isDataLoaded: boolean,
};

export type PromoFilmData = {
  promoFilm: Movie,
  isDataLoaded: boolean,
};

export type SelectedGenre = {
  selectedGenre: string;
};

export type SimilarFilmsData = {
  similarFilms: Movies,
  isDataLoaded: boolean,
};

export type UserData = {
  userLoginData: UserLoginData,
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type FilmFull = {
  filmFull: Movie,
  isDataLoaded: boolean,
};

export type PostUserReview = {
  userComment: CommentPost,
};

export type ReviewSendStatusData = {
  reviewSendStatus: ReviewSendStatus,
};

export type State = ReturnType<typeof store.getState>;
