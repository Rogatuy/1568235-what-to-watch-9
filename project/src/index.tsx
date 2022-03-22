import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';
import {Provider} from 'react-redux';
import {store} from './store';

const Setting = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE_DATE: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        name={Setting.TITLE}
        genre={Setting.GENRE}
        released={Setting.RELEASE_DATE}
        films={films}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

