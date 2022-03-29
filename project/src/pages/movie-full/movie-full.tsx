import { Link, Navigate } from 'react-router-dom';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import { AppRoute, AuthorizationStatus } from '../../const';
import Tabs from '../../components/tabs/tabs';
import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';


function MovieFull (): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const movie = useAppSelector((state) => state.filmFull);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (!movie) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={movie.backgroundImage} alt={movie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{movie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movie.genre}</span>
                <span className="film-card__year">{movie.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`${AppRoute.Player}${movie.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth
                  ? <Link to={`${AppRoute.Film}${movie.id}/review`} className="btn film-card__button">Add review</Link>
                  : ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={movie.posterImage} alt={movie.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs film={movie}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={films.filter((film) => film.genre === movie.genre).slice(0, 4)}/>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MovieFull;
