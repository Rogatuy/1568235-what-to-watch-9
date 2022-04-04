import  './add-review-form.css';

import {FormEvent, useCallback, useEffect, useRef, useState} from 'react';
import { getReviewSendStatus } from '../../store/review-send-status/selectors';
import StarsRating from '../stars-raiting/stars-raiting';
import { useAppSelector } from '../../hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { reviewSendStatus } from '../../store/review-send-status/review-send-status';
import { store } from '../../store';
import { AppRoute, RATING_LENGTH, REVIEW_LENGTH_MAX, REVIEW_LENGTH_MIN } from '../../const';
import { addComment, fetchCommentsAction } from '../../store/api-actions';

function AddCommentForm(): JSX.Element {
  const [commentData, setCommentData] = useState<string>('');
  const [starRating, setStarRating] = useState<number>(0);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const textarea = useRef<HTMLTextAreaElement>(null);
  const sendStatus = useAppSelector(getReviewSendStatus);
  const navigate = useNavigate();
  const {id} = useParams();
  const filmId = Number(id);
  useEffect (() => () => {
    store.dispatch(reviewSendStatus('initial'));
  }, []);

  const handleRatingChange = (rating: number) => {
    setStarRating(rating);
  };

  const handleCheckIsDisabled = useCallback((() => {
    setIsDisabled(starRating === 0 || (!!textarea.current && ( textarea.current.value.length < REVIEW_LENGTH_MIN ||
      textarea.current.value.length > REVIEW_LENGTH_MAX)));
  }), [starRating]);

  useEffect(() => {
    handleCheckIsDisabled();
  }, [handleCheckIsDisabled]);

  useEffect (() => {
    if (isSending && sendStatus === 'initial') {
      store.dispatch(fetchCommentsAction(filmId));
      navigate(`${AppRoute.Film}${id}`);
    }
    setIsSending(sendStatus === 'sending');
  }, [filmId, id, isSending, navigate, sendStatus]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!isDisabled) {
      const comment  = textarea.current?.value || '';
      setCommentData(comment);
      store.dispatch(addComment({filmId, comment, rating: starRating}));
    }
  };

  return (
    <form
      action="#"
      className={`add-review__form ${isSending ? ' add-review__form-disabled' : ''}`}
      onSubmit={handleSubmit}
    >
      <div className="rating">
        <div className="rating__stars">
          {Array.from({length: RATING_LENGTH}, (k, i) => (
            <StarsRating
              key={i + 1}
              item={i + 1}
              isSending={isSending}
              onRatingChange={handleRatingChange}
            />
          )).reverse()}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          ref={textarea}
          onChange={() => handleCheckIsDisabled()}
          defaultValue={commentData}
          name="comment"
          className="add-review__textarea"
          id="review-text"
          placeholder="Review text"
          disabled={isSending}
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={isDisabled || isSending}
          >
            Post
          </button>
        </div>
      </div>
      {sendStatus === 'error' && <span>Oops, something went wrong while submitting your review! Try later!</span>}
    </form>
  );
}

export default AddCommentForm;
