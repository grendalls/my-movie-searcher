import Service from '../services';
import {
  FETCH_MOVIE_STARTED,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILED
} from './action-type-keys';
const service = new Service();

export const fetchBestMovies = (page?: number) => async dispatch => {
  const dispatchError = err =>
    dispatch({
      type: FETCH_MOVIE_FAILED,
      payload: err
    });

  dispatch({
    type: FETCH_MOVIE_STARTED
  });
  try {
    const response = await service.getPopularMovies(page);
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
        type: FETCH_MOVIE_SUCCESS,
        payload: movieData
      });
    } else {
      dispatchError(new Error('Status code is not 200'));
    }
  } catch (error) {
    dispatchError(error);
  }
};
