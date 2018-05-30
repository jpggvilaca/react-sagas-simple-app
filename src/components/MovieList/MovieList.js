import React, { Component, Fragment } from 'react';
import { array } from 'prop-types';

import EmptyState from 'components/Common/EmptyState';

import styles from './MovieList.css';

export class MovieList extends Component {
  static propTypes = { movies: array };
  static defaultProps = { movies: [] };

  triggerMovieDetails = e => {
    const { onSelect } = this.props;
    const movieID = e.currentTarget.dataset.id;

    onSelect && onSelect(movieID);
  }

  renderList = () => {
    const { movies } = this.props;

    if (!movies.length) { return <EmptyState />; }

    return (
      <ul className={styles.list}>
        {movies.map((movie, i) => (
            <li
              key={`movie-${i}`}
              data-id={movie.id}
              className={styles.movie}
              onClick={this.triggerMovieDetails}
            >
              <span>{movie.title}</span>
            </li>
          ))
        }
      </ul>
    );
  }

  render() {
    return (
      <Fragment>
        { this.renderList() }
      </Fragment>
    );
  };
}

export default MovieList;
