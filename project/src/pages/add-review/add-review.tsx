import { useParams, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Movies } from '../../types/Movie';
import Logo from '../../components/logo/logo';
import UserNavigation from '../../components/user-navigation/user-navigation';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type AddReviewProps = {
  films: Movies;
}

function AddReview({films}: AddReviewProps): JSX.Element {
  const {id} = useParams();
  const movie = films.find((film) => film.id === Number(id));

  if(!movie) {
    return <NotFoundScreen />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={movie.backgroundImage} alt={movie.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.Film}${movie.id}`} className="breadcrumbs__link">{movie.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="/">Add review</a>
              </li>
            </ul>
          </nav>

          <UserNavigation />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={movie.posterImage} alt={`${movie.name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>

    </section>
  );
}

export default AddReview;
