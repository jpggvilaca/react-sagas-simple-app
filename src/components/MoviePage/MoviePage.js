import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, selectMovie } from 'actions';

import MovieList from 'components/MovieList/MovieList';
import Loading from 'components/Common/Loading';

import styles from './MoviePage.css';

const mapStateToProps = state => ({
  isFetching: state.movies.isFetching,
  movies: state.movies.movies
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies()),
  selectMovie: id => dispatch(selectMovie(id))
});

class MoviePage extends Component {
  componentDidMount() {
    const { fetchMovies, movies } = this.props;

    // Cache values are available so we avoid fetching new data
    if (movies.length) { return; }

    fetchMovies && fetchMovies();
  }

  render() {
    const { movies, isFetching, selectMovie } = this.props;

    return (
        isFetching
          ? <Loading />
          : <div className={styles.list}>
              <h1 className={styles.header}>List of Movies</h1>
              <MovieList movies={movies} onSelect={selectMovie} />
            </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
