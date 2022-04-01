import { useState } from 'react';
import CardMovie from '../../components/card-movie/card-movie';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserNavigation from '../../components/user-navigation/user-navigation';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilmsList } from '../../store/favorite-films-data/selectors';

function MyList(): JSX.Element {
  const favoriteFilms = useAppSelector(getFavoriteFilmsList);
  const [activeId, setActiveId] = useState<number | null>(null);

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
          {favoriteFilms.map((film) => (
            <CardMovie
              key={film.id}
              film={film}
              isActive={film.id === activeId}
              onHover={setActiveId}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MyList;
