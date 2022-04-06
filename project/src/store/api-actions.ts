import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../store';
import {store} from '../store';
import {addFilmToFavorite, Movie, Movies} from '../types/movie';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {AuthData} from '../types/auth-data';
import {UserCommentData, UserData} from '../types/user-data';
import { errorHandle } from '../services/error-handle';
import { CommentPost, Comments} from '../types/comments';
import { loadFilms } from './films-data/films-data';
import { loadPromoFilm } from './promo-film-data/promo-film-data';
import { loadSimilarFilms } from './similar-films-data/similar-films-data';
import { loadComments } from './comments-data/comments-data';
import { loadMyList } from './favorite-films-data/favorite-films-data';
import { requireAuthorization } from './user-process/user-process';
import { redirectToRoute } from './action';
import { loadFilmFull } from './film-full-data/film-full-data';
import { userData } from './user-data/user-data';
import { postUserReview } from './post-comment-data/post-comment-data';
import { reviewSendStatus } from './review-send-status/review-send-status';
import { useNavigate } from 'react-router-dom';


export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    try {
      const {data} = await api.get<Movies>(APIRoute.Films);
      store.dispatch(loadFilms(data));
    } catch(error) {
      errorHandle(error);
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  'data/fetchPromoFilm',
  async () => {
    try {
      const {data} = await api.get<Movie>(APIRoute.Promo);
      store.dispatch(loadPromoFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchSimilarAction = createAsyncThunk(
  'data/fetchSimilarFilms',
  async (id: number) => {
    try {
      const {data} = await api.get<Movies>(`${APIRoute.Films}/${id}/similar`);
      store.dispatch(loadSimilarFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFullFilmAction = createAsyncThunk(
  'data/fetchFullFilm',
  async (id: number) => {
    try {
      const {data} = await api.get<Movie>(`${APIRoute.Films}/${id}`);
      store.dispatch(loadFilmFull(data));
    } catch (error) {
      errorHandle(error);
      const navigate = useNavigate();
      navigate(`${APIRoute.NoFoundScreen}`);
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'data/fetchComments',
  async (id: number | null) => {
    try {
      const {data} = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
      store.dispatch(loadComments(data));
    } catch (error) {
      errorHandle (error);
    }
  },
);

export const addComment = createAsyncThunk(
  'data/addComment',
  async ({comment, rating, filmId}:CommentPost) => {
    try {
      store.dispatch(reviewSendStatus('sending'));
      await api.post<CommentPost>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
      store.dispatch(postUserReview({filmId, comment, rating}));
      store.dispatch(reviewSendStatus('initial'));
    } catch (error) {
      errorHandle (error);
      store.dispatch(reviewSendStatus('error'));
    }
  },
);

export const fetchMyListAction = createAsyncThunk(
  'data/fetchMyList',
  async () => {
    try {
      const {data} = await api.get<Movies>(APIRoute.Favorite);
      store.dispatch(loadMyList(data));
    } catch (error) {
      errorHandle (error);
    }
  },
);

export const addFavoriteFilm = createAsyncThunk(
  'data/addFavoriteFilms',
  async ({id, status}: addFilmToFavorite) => {
    try {
      await api.post<UserCommentData>(`${APIRoute.Favorite}/${id}/${status}`, {id, status});
      store.dispatch(fetchMyListAction());
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      const {data} = await api.get(APIRoute.Login);
      store.dispatch(userData(data));
      store.dispatch(fetchMyListAction());
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      store.dispatch(userData(data));
      store.dispatch(fetchMyListAction());
      new Response(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch(error) {
      errorHandle(error);
    }
  },
);
