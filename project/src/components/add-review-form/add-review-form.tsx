import {useState} from 'react';
import StarsRating from '../stars-raiting/stars-raiting';

const RATING_LENGTH = 10;
const REVIEW_LENGTH_MIN = 50;
const REVIEW_LENGTH_MAX = 400;

function AddReviewForm(): JSX.Element {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleInputChange = (item: number): void => setRating(item);

  const isDisabled = (review.length < REVIEW_LENGTH_MIN || review.length > REVIEW_LENGTH_MAX) || rating === 0;

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {Array.from({length: RATING_LENGTH}, (k, i) => (
            <StarsRating
              key={i + 1}
              item={i + 1}
              onRatingChange={handleInputChange}
            />
          )).reverse()}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={review}
          onChange={(evt) => setReview(evt.target.value)}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isDisabled}>Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
