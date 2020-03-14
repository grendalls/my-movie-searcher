import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchBestMovies } from '../../actions';
import { getImageUrl } from '../../helpers';

const MovieCards = (props: any) => {
  useEffect(() => {
    props.fetchBestMovies();
  }, []);
  return props.films.map(film => (
    <img
      style={{ width: '30%', height: '400px' }}
      key={film.id}
      src={getImageUrl(film.poster_path)}
    />
  ));
};

const mapStateToProps = state => {
  console.log(state);
  return { films: state };
};

export default connect(mapStateToProps, { fetchBestMovies })(MovieCards);
