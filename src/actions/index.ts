import Service from '../services';
import {
  FETCH_MOVIE_STARTED,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILED
} from './action-type-keys';
const service = new Service();

export const fetchBestMovies = () => async dispatch => {
  dispatch({
    type: FETCH_MOVIE_STARTED
  });
  try {
    const response = (await service.getPopularMovies()).data.results;
    dispatch({
      type: FETCH_MOVIE_SUCCESS,
      payload: response
    });
  } catch (error) {
    dispatch({
      type: FETCH_MOVIE_FAILED
    });
  }
};
