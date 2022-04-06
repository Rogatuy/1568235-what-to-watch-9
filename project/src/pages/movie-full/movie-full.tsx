import { Link, useNavigate, useParams } from 'react-router-dom';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import { AppRoute, AuthorizationStatus, MAX_SIMILAR_FILMS } from '../../const';
import Tabs from '../../components/tabs/tabs';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import { useEffect } from 'react';
import { fetchCommentsAction, fetchFullFilmAction, fetchSimilarAction } from '../../store/api-actions';
import { getCommentsList, getCommentsLoadedDataStatus } from '../../store/comments-data/selectors';
import { getSimilarLoadedDataStatus, getSumilarFilmsList } from '../../store/similar-films-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getFilmFull, getFilmFullLoadedDataStatus } from '../../store/film-full-data/selectors';
import AddToMyListButton from '../../components/add-to-my-list-button/add-to-my-list-button';
import LoadingScreen from '../../components/loading-screen/loading-screen';


function MovieFull (): JSX.Element {
  const comments = useAppSelector (getCommentsList);
  const similarFilms = useAppSelector(getSumilarFilmsList);
  const isDataLoadedSimilarList = useAppSelector(getSimilarLoadedDataStatus);
  const isDataLoadedCommentsList = useAppSelector(getCommentsLoadedDataStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const filmFull = useAppSelector(getFilmFull);
  const isDataLoadedFilmFull = useAppSelector(getFilmFullLoadedDataStatus);
  const {id} = useParams();
  const filmId = Number(id);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!filmFull) {
      navigate(AppRoute.NoFoundScreen);
      return;
    }

    dispatch(fetchFullFilmAction(filmId));
    dispatch(fetchSimilarAction(filmId));
    dispatch(fetchCommentsAction(filmId));
  }, [filmId, dispatch, filmFull, navigate]);

  if (!isDataLoadedSimilarList || !isDataLoadedCommentsList || !isDataLoadedFilmFull) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={filmFull.backgroundImage} alt={filmFull.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmFull.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmFull.genre}</span>
                <span className="film-card__year">{filmFull.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`${AppRoute.Player}${filmFull.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <AddToMyListButton filmId={filmFull.id} />
                {authorizationStatus === AuthorizationStatus.Auth
                  ? <Link to={`${AppRoute.Film}${filmFull.id}/review`} className="btn film-card__button">Add review</Link>
                  : ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={filmFull.posterImage} alt={filmFull.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs film={filmFull} comments={comments}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={(similarFilms).slice(0, MAX_SIMILAR_FILMS)}/>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MovieFull;
