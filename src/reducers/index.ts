import { FETCH_MOVIE_SUCCESS } from './../actions/action-type-keys';
import { FETCH_MOVIE_STARTED } from '../actions/action-type-keys';

const rootReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIE_STARTED:
      return state;
    case FETCH_MOVIE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default rootReducer;
