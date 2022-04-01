export enum AppRoute {
  Login = '/login',
  Main = '/',
  MyList = '/mylist',
  Film = '/films/',
  Player = '/player/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum ratingToText {
  Bad = 3,
  Normal = 5,
  Good = 8,
  Awesome = 10,
}

export const ALL_GENRES = 'All genres';

export const FILMS_STEP = 8;

export const MAX_GENRES = 10;

export const MAX_SIMILAR_FILMS = 4;

export const RATING_LENGTH = 10;
export const REVIEW_LENGTH_MIN = 50;
export const REVIEW_LENGTH_MAX = 400;

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  filmsData = 'FILMS_DATA',
  commentsData = 'COMMENTS_DATA',
  promoFilmData = 'PROMO_FILM_DATA',
  similarFilmsData = 'SIMILAR_FILMS_DATA',
  myList  = 'MY_LIST',
  postUserReview = 'POST_USER_REVIEW',
  reviewSendStatus = 'REVIEW_SEND_STATUS',
  selectedGenre = 'SELECTED_GENRE',
  user = 'USER',
  userData = 'USER_DATA',
  filmFullData = 'FILM_FULL_DATA',
}
