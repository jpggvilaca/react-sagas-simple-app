import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { persistReducer } from 'redux-persist';
import { REHYDRATE } from 'redux-persist/lib/constants';
import storage from 'redux-persist/lib/storage';

import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  SELECT_MOVIE,
  SELECT_MOVIE_SUCCESS,
  SELECT_MOVIE_ERROR,
} from '../constants';

const initialState = {
  isFetching: false,
  movies: [],
  selectedMovie: {}
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, isFetching: action.isFetching };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, isFetching: action.isFetching, movies: action.movies }
    case FETCH_MOVIES_ERROR:
      return { ...state, isFetching: action.isFetching };
    case SELECT_MOVIE:
      return { ...state, isFetching: action.isFetching };
    case SELECT_MOVIE_SUCCESS:
      return { ...state, isFetching: action.isFetching, selectedMovie: action.movie };
    case SELECT_MOVIE_ERROR:
      return { ...state, isFetching: action.isFetching };
    case REHYDRATE:
      return state;
    default: {
      return state;
    }
  }
};

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['isFetching']
}

const reducers = combineReducers({
  router: routerReducer,
  movies: persistReducer(persistConfig, movieReducer)
});

export default reducers;
