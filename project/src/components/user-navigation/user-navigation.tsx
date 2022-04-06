import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getUserLoginData } from '../../store/user-data/selectors';

function UserNavigation(): JSX.Element {
  const dispatch = useAppDispatch();
  const userLoginData = useAppSelector(getUserLoginData);

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList}>
            <img src={userLoginData.avatarUrl} alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link
          className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          to="/"
        >
          Sign out
        </Link>
      </li>
    </ul>
  );
}

export default UserNavigation;
