import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import {AppRoute,  AuthorizationStatus} from '../../const';
import MyList from '../../pages/my-list/my-list';
import SignIn from '../../pages/sign-in/sign-in';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import MovieFull from '../../pages/movie-full/movie-full';
import Player from '../../pages/player/player';
import { Movies } from '../../types/Movie';
import AddReview from '../../pages/add-review/add-review';

type AppScreenProps = {
  name: string,
  genre: string,
  released: number,
  films: Movies;
}

function App({name, genre, released, films}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage name={name} genre={genre} released={released}/>
          }
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList films={films}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<SignIn/>}
        />
        <Route path={AppRoute.Film}>
          <Route index element={<MovieFull films={films}/>} />
          <Route path=':id' element={<MovieFull films={films}/>} />
          <Route path=':id/review' element={<AddReview films={films}/>} />
        </Route>
        <Route path={AppRoute.Player}>
          <Route index element={<Player films={films}/>} />
          <Route path=':id' element={<Player films={films}/>} />
        </Route>
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
