import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  SELECT_MOVIE,
  SELECT_MOVIE_SUCCESS,
  SELECT_MOVIE_ERROR
} from '../constants';

export const fetchMovies = () => {
  return { type: FETCH_MOVIES, isFetching: true };
};

export const fetchedMovies = movies => {
  return { type: FETCH_MOVIES_SUCCESS, movies, isFetching: false };
};

export const fetchMoviesError = err => {
  console.log(err);
  return { type: FETCH_MOVIES_ERROR, isFetching: false };
}

export const selectMovie = id => {
  return { type: SELECT_MOVIE, isFetching: true, id };
}

export const selectedMovie = movie => {
  return { type: SELECT_MOVIE_SUCCESS, isFetching: false, selectedMovie: movie };
}

export const selectMovieError = () => {
  return { type: SELECT_MOVIE_ERROR, isFetching: false };
}
