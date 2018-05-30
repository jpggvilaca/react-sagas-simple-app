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
        <h2 className={styles.title}>Title: {title}</h2>
        <span>Producer: {producer}</span>
        <span>Director: {director}</span>
        <p className={styles.description}>Description: {description}</p>
      </div>
    );
  }
};

Movie.propTypes = { selectedMovie: object };
Movie.displayName = 'Movie';

export default connect(mapStateToProps, null)(Movie);
