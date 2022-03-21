import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';

const Setting = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE_DATE: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      name={Setting.TITLE}
      genre={Setting.GENRE}
      released={Setting.RELEASE_DATE}
      films={films}
    />
  </React.StrictMode>,
  document.getElementById('root'));

