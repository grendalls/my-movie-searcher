import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchBestMovies } from '../../actions';
import { getImageUrl } from '../../helpers';
import classes from './movie-cards.css';

const MovieCards = (props: any) => {
  useEffect(() => {
    props.fetchBestMovies();
  }, []);
  return (
    <div className={classes.movieCards}>
      {props.films.map(film => (
        <img key={film.id} src={getImageUrl(film.poster_path)} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { films: state };
};

export default connect(mapStateToProps, { fetchBestMovies })(MovieCards);
