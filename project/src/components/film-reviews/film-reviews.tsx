import { Comments } from '../../types/comments';
import Review from '../review/review';

type FilmReviewsProps = {
  reviews: Comments;
}

function FilmReviews({reviews}: FilmReviewsProps): JSX.Element {
  const halfIndex = Math.ceil(reviews.length/2);
  const reviewsСolumnFirst = reviews.slice(0, halfIndex);
  const reviewsСolumnSecond = reviews.slice(halfIndex, reviews.length);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewsСolumnFirst.map((review) => (
          <Review
            key = {review.user.id}
            review = {review}
          />
        ))}
      </div>
      <div className="film-card__reviews-col">
        {reviewsСolumnSecond.map((review) => (
          <Review
            key = {review.user.id}
            review = {review}
          />
        ))}
      </div>
    </div>
  );
}

export default FilmReviews;
