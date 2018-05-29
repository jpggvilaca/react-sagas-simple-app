import React, { Component } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';

import styles from './Movie.css';

const mapStateToProps = state => ({
  selectedMovie: state.movies.selectedMovie
});

export class Movie extends Component {
  render() {
    const { title, producer, director, description } = this.props.selectedMovie;

    return (
      <div className={styles.movie}>
        <span className={styles.title}>Title: {title}</span>
        <span>Producer: {producer}</span>
        <span>Director: {director}</span>
        <span className={styles.description}>Description: {description}</span>
      </div>
    );
  }
};

Movie.propTypes = { selectedMovie: object };
Movie.displayName = 'Movie';

export default connect(mapStateToProps, null)(Movie);
