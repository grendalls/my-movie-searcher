import Service from '../services';
import {
  FETCH_POPULAR_MOVIES_STARTED,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILED
} from './action-type-keys';

export default (page?: number) => async dispatch => {
  const dispatchError = err =>
    dispatch({
      type: FETCH_POPULAR_MOVIES_FAILED,
      payload: err
    });

  dispatch({
    type: FETCH_POPULAR_MOVIES_STARTED
  });

  try {

    const response = await Service.getPopularMovies(page);

    if (response.status === 200) {
      const movieData = response.data.results.map(movie => {
        const { id, poster_path, title, overview } = movie;
        return {
          id,
          poster_path,
          title,
          overview
        };
      });

      dispatch({
        type: FETCH_POPULAR_MOVIES_SUCCESS,
        payload: movieData
      });

    } else {
      dispatchError('Status code is not 200');
    }
  } catch (error) {
    dispatchError(error.message);
  }
};
