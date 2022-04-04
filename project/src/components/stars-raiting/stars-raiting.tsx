type StarsRatingProps = {
  item: number;
  onRatingChange: (item: number) => void;
  isSending: boolean;
}

function StarsRating({item, onRatingChange, isSending}: StarsRatingProps): JSX.Element {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${item}`}
        type="radio"
        name="rating"
        value={item}
        disabled={isSending}
        onChange={() => onRatingChange(item)}
      />
      <label className="rating__label" htmlFor={`star-${item}`}>
        {`Rating ${item}`}
      </label>
    </>
  );
}

export default StarsRating;
