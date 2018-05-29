import { call, put, takeLatest, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import {
  fetchedMovies,
  fetchMoviesError,
  selectedMovie,
  selectMovieError
} from 'actions';

import { FETCH_MOVIES, SELECT_MOVIE } from './constants';

import { fetchMovies, fetchMovieById } from './api';

// Simple delay method to fake slow network
const delay = ms => new Promise(res => setTimeout(res, ms));

/*
  NOTE:

  Commented code was from the first iteration of the solution.
  navigationSaga would listen for route changes and trigger the right
  watcher saga according to the current url, but given a second thought it might
  be easier and more scalable if the dispatches are on the component containers
  and not all packed here.

*/

// const SAGA_ROUTE_MAP = {
//   '/movies': fetchMoviesSaga
//   ... other routes here
// };

// function* navigationSaga(action) {
//   const location = action.payload;
//   const saga = SAGA_ROUTE_MAP[location.pathname];
//
//   if (saga) {
//     yield call(saga, location);
//   }
// }

function* fetchMoviesSaga() {
  try {
    const movieList = yield call(fetchMovies);

    yield delay(1000); // To simulate slow loading
    yield put(fetchedMovies(movieList.data));
  } catch(err) {
    console.log(err);
    yield put(fetchMoviesError(err));
  }
}

function* fetchSingleMovieSaga(action) {
  try {
    const { id } = action;
    const movie = yield call(fetchMovieById, id);

    yield delay(1000); // To simulate slow loading
    yield put(push(`/movies/${id}`));
    yield put(selectedMovie(movie.data));
  } catch(err) {
    console.log(err);
    yield put(selectMovieError(err));
  }
}

export default function* rootSaga() {
  // yield takeLatest('@@router/LOCATION_CHANGE', navigationSaga);
  yield all([
    takeLatest(FETCH_MOVIES, fetchMoviesSaga),
    takeLatest(SELECT_MOVIE, fetchSingleMovieSaga)
  ]);
};
