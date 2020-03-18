import React from 'react';
import Header from '../header';
import MovieCards from '../../containers/movie-cards';
import InfiniteScroll from 'react-infinite-scroll';
import Spinner from '../spinner';

const App = () => {
  return (
    <div>
      <Header />
      <MovieCards />
      <Spinner />
    </div>
  );
};

export default App;
