import {Link} from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';


function NotFoundScreen() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
      </header>
      <div className="film-card__wrap">
        <h1> 404. Page not found</h1>
        <Link className="film-card__wrap" to='/'>Вернуться на главную</Link>
      </div>
      <Footer />
    </div>
  );
}

export default NotFoundScreen;
