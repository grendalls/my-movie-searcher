import {
  FETCH_POPULAR_MOVIES_STARTED,
  FETCH_POPULAR_MOVIES_SUCCESS
} from './../actions/action-type-keys';

const rootReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES_STARTED:
      return state;
    case FETCH_POPULAR_MOVIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default rootReducer;
