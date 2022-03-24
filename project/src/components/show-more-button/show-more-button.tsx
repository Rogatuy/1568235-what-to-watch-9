import { useAppDispatch } from '../../hooks';
import { showMoreClick } from '../../store/action';
// import { Movies } from '../../types/Movie';

// type showMoreButtonProps = {
//   films: Movies;
// }

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => dispatch(showMoreClick())}>Show more</button>
    </div>);
}

export default ShowMoreButton;
