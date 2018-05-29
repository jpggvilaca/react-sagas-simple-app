import React, { Component } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  selectedMovie: state.movies.selectedMovie
});

export class Movie extends Component {
  render() {
    const { title, producer, director, description } = this.props.selectedMovie;

    return (
      <div className="movie">
        <span>{title}</span>
        <span>{producer}</span>
        <span>{director}</span>
        <span>{description}</span>
      </div>
    );
  }
};

Movie.propTypes = { selectedMovie: object };
Movie.displayName = 'Movie';

export default connect(mapStateToProps, null)(Movie);
