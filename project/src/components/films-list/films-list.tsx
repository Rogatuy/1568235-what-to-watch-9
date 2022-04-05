import CardMovie from '../card-movie/card-movie';
import { Movies } from '../../types/movie';
import { useAppSelector } from '../../hooks';
import { ALL_GENRES, FILMS_STEP } from '../../const';
import ShowMoreButton from '../show-more-button/show-more-button';
import { useState } from 'react';
import { getSelectedGenre } from '../../store/selected-genre/selectors';

type FilmsListProps = {
  films: Movies;
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  const [filmsCount, setFilmsCount] = useState<number>(FILMS_STEP);
  const [activeId, setActiveId] = useState<number | null>(null);
  const chooseGenre = useAppSelector(getSelectedGenre);
  const choosingFilms = chooseGenre === ALL_GENRES
    ? films
    : films.filter((film) => film.genre === chooseGenre);

  const handleButtonClick = () => {
    setFilmsCount(filmsCount + Math.min(FILMS_STEP, choosingFilms.length));
  };

  return (
    <>
      <div className="catalog__films-list">
        {choosingFilms.slice(0, filmsCount).map((film) => (
          <CardMovie
            key={film.id}
            film={film}
            isActive={film.id === activeId}
            onHover={setActiveId}
          />
        ))}
      </div>
      {choosingFilms.length > filmsCount &&
        <ShowMoreButton handleButtonClick={handleButtonClick}/>}
    </>
  );
}

export default FilmsList;
