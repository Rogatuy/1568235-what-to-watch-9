import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserNavigation from '../../components/user-navigation/user-navigation';
import { useAppSelector } from '../../hooks';

function MyList(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const favoriteFilms = films.filter((film) => film.isFavorite);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserNavigation />
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
