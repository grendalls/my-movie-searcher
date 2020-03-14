import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';

import App from './components/app';
import store from './store';

import Service from './services';

const service = new Service();
service.getMovieByName('Joker').then(res => console.log(res));
service.getPopularMovies().then(res => console.log(res));

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
