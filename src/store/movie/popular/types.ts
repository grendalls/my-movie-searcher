import { Action } from 'redux';

export enum ActionTypes {
  FETCH_POPULAR_MOVIES_STARTED = 'FETCH_POPULAR_MOVIES_STARTED',
  FETCH_POPULAR_MOVIES_SUCCESS = 'FETCH_POPULAR_MOVIES_SUCCESS',
  FETCH_POPULAR_MOVIES_FAILED = 'FETCH_POPULAR_MOVIES_FAILED',
}

export interface IFetchPopularMoviesStarted extends Action {
  type: ActionTypes.FETCH_POPULAR_MOVIES_STARTED
}

export interface IFetchPopularMoviesSuccess extends Action {
  type: ActionTypes.FETCH_POPULAR_MOVIES_SUCCESS,
  // TODO: payload
  payload: null
}

export interface IFetchPopularMoviesFailed extends Action {
  type: ActionTypes.FETCH_POPULAR_MOVIES_FAILED
}
