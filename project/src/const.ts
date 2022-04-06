export enum AppRoute {
  Login = '/login',
  Main = '/',
  MyList = '/mylist',
  Film = '/films/',
  Player = '/player/',
  NoFoundScreen = '/*',
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
  NoFoundScreen = '/*',
}

export enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  FilmsData = 'FILMS_DATA',
  CommentsData = 'COMMENTS_DATA',
  PromoFilmData = 'PROMO_FILM_DATA',
  SimilarFilmsData = 'SIMILAR_FILMS_DATA',
  MyList  = 'MY_LIST',
  PostUserReview = 'POST_USER_REVIEW',
  ReviewSendStatus = 'REVIEW_SEND_STATUS',
  SelectedGenre = 'SELECTED_GENRE',
  User = 'USER',
  UserData = 'USER_DATA',
  FilmFullData = 'FILM_FULL_DATA',
  ServerStatus = 'SERVER_STATUS',
}

export const validatePassword = /^(?=.*\d)(?=.*[a-zA-Z]).*/;

export const validateEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|ru|yahoo|yandex|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|ua|in|bz|xxx|tel|place)\b/;
