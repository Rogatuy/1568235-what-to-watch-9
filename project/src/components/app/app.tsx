import {Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import {AppRoute} from '../../const';
import MyList from '../../pages/my-list/my-list';
import SignIn from '../../pages/sign-in/sign-in';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import MovieFull from '../../pages/movie-full/movie-full';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import { isCheckedAuth } from '../../utils';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getFilmsLoadedDataStatus } from '../../store/films-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getPromoFiilmLoadedDataStatus } from '../../store/promo-film-data/selectors';
import { getServerStatus } from '../../store/server-status/selectors';
import ServerErorMessage from '../server-error-message/server-error-message';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isFilmsLoaded = useAppSelector(getFilmsLoadedDataStatus);
  const isPromoLoaded = useAppSelector(getPromoFiilmLoadedDataStatus);
  const serverDataLoadingSattus = useAppSelector(getServerStatus);

  if (!serverDataLoadingSattus) {
    return (
      <ServerErorMessage />
    );
  }

  if (isCheckedAuth(authorizationStatus) || !isFilmsLoaded || !isPromoLoaded ) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Login}
          element={<SignIn/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Film}>
          <Route index element={<MovieFull/>} />
          <Route path=':id' element={<MovieFull />} />
          <Route path=':id/review' element={<AddReview />} />
        </Route>
        <Route path={AppRoute.Player}>
          <Route index element={<Player />} />
          <Route path=':id' element={<Player />} />
        </Route>
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
