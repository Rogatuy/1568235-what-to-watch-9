import CardMovie from '../card-movie/card-movie';
import {Movies} from '../../types/Movie';
import { useAppSelector } from '../../hooks';
import { ALL_GENRES, FILMS_STEP } from '../../const';
import ShowMoreButton from '../show-more-button/show-more-button';

type FilmsListProps = {
  films: Movies;
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  const chooseGenre = useAppSelector((state) => state.genre);
  const filmsCount = useAppSelector((state) => state.filmsCount);
  const choosingFilms = chooseGenre === ALL_GENRES
    ? films
    : films.filter((film) => film.genre === chooseGenre);
  const filmsLength = choosingFilms.length;

  let buttonElement;
  if (filmsLength > FILMS_STEP && filmsLength > filmsCount) {
    buttonElement = <ShowMoreButton />;
  } else {
    buttonElement = '';
  }

  return (
    <>
      <div className="catalog__films-list">
        {choosingFilms.slice(0, filmsCount).map((film) => (
          <CardMovie
            key={film.id}
            film={film}
          />
        ))}
      </div>
      {buttonElement}
    </>
  );
}

export default FilmsList;
