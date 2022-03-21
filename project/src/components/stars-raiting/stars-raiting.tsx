type StarsRatingProps = {
  item: number;
  onRatingChange: (item: number) => void;
}

function StarsRating({item, onRatingChange}: StarsRatingProps): JSX.Element {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${item}`}
        type="radio"
        name="rating"
        value={item}
        onChange={() => onRatingChange(item)}
      />
      <label className="rating__label" htmlFor={`star-${item}`}>
        {`Rating ${item}`}
      </label>
    </>
  );
}

export default StarsRating;
