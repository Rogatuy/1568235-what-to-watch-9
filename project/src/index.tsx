import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE_DATE: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App title = {Setting.TITLE} genre = {Setting.GENRE} releaseDate = {Setting.RELEASE_DATE}/>
  </React.StrictMode>,
  document.getElementById('root'));

