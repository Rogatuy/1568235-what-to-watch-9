import { ratingToText } from '../../const';
import { Movie } from '../../types/Movie';

type FilmOverviewProps = {
  film: Movie;
}

const convertRatingToText = ( ratingNumber: number) => {
  if (ratingNumber <= ratingToText.Bad) {
    return 'Bad';}
  if (ratingNumber > ratingToText.Bad && ratingNumber <= ratingToText.Normal) {
    return 'Normal';}
  if (ratingNumber > ratingToText.Normal && ratingNumber <= ratingToText.Good) {
    return 'Good';}
  if (ratingNumber > ratingToText.Good && ratingNumber < ratingToText.Awesome) {
    return 'Very good';}
  if (ratingNumber === ratingToText.Awesome) {
    return 'Awesome';}
};

function FilmOverview({film}: FilmOverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{convertRatingToText(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')}</strong></p>
      </div>
    </>
  );
}

export default FilmOverview;
