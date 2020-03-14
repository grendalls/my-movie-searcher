import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';

import App from './components/app';
import store from './store';

import Service from './services';
import { getImageUrl } from './helpers';

const service = new Service();

service.getPopularMovies()
  .then(res => res.data.results)
  .then(results => {
    results.forEach(result => console.log(getImageUrl(result.poster_path)));
  });

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
