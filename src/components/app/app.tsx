import React from 'react';
import Header from '../header';
import MovieCards from '../../containers/movie-cards';
import InfiniteScroll from 'react-infinite-scroll';
import loadable from '@loadable/component';
import Spinner from '../spinner';

const MovieCard = loadable();

const App = () => {
  return (
    <div>
      <Header />
      <MovieCards />
    </div>
  );
};

export default App;
