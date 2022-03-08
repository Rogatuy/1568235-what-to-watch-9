import {useState} from 'react';
import CardMovie from '../card-movie/card-movie';
import {Movies} from '../../types/Movie';


type FilmsListProps = {
  films: Movies;
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  const [activeFilm, setActiveFilm] = useState(0);

  const handleFilmHover = (id: number): void => setActiveFilm(id);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <CardMovie
          key={film.id}
          id={film.id}
          movieName={film.name}
          movieImage={film.previewImage}
          onHover={handleFilmHover}
        />
      ))}
      <h1 className="visually-hidden">{activeFilm}</h1>
    </div>
  );
}

export default FilmsList;
