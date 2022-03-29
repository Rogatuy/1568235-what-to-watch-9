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

export const MAX_GENRES = 10;
