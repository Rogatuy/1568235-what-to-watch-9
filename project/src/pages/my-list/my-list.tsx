import { Link } from 'react-router-dom';
import { Movies } from '../../types/Movie';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';

type MyListProps = {
  films: Movies;
}


function MyList({films}: MyListProps): JSX.Element {
  const favoriteFilms = films.filter((film) => film.isFavorite);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to="/">Sign out</Link>
          </li>
        </ul>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmsList films={favoriteFilms}/>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MyList;
