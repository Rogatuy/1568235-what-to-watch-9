import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import ListOfGenre from '../../components/list-of-genre/list-of-genre';
import { useAppSelector } from '../../hooks';
import PromoFilm from '../../components/promo-film/promo-film';
import { getFilmsList } from '../../store/films-data/selectors';

function MainPage(): JSX.Element {
  const films = useAppSelector(getFilmsList);

  return (
    <>
      <PromoFilm />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ListOfGenre films={films} />
          <FilmsList films={films} />
        </section>

        <Footer />

      </div>
    </>
  );
}

export default MainPage;
