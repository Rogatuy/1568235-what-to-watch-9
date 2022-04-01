import Logo from '../logo/logo';
import UserNavigation from '../user-navigation/user-navigation';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import SignIn from '../sign-in/sign-in';
import { getAuthorizationStatus } from '../../store/user-process/selectors';


function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <header className="page-header film-card__head">
      <Logo />
      {authorizationStatus === AuthorizationStatus.Auth
        ? <UserNavigation />
        : <SignIn />}
    </header>
  );
}

export default Header;
