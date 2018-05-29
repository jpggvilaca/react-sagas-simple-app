import React, { Component } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  selectedMovie: state.movies.selectedMovie
});

export class Movie extends Component {
  render() {
    console.log('Movie: ', this.props);
    // const { icon_url, value, id } = this.props.selectedMovie;

    return (
      <div className="movie">
        cenas
      </div>
    );
  }
};

Movie.propTypes = { selectedMovie: object };
Movie.defaultProps = {};
Movie.displayName = 'Movie';

export default connect(mapStateToProps, null)(Movie);
