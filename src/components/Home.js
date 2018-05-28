import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchRandomProduct } from 'actions';

import Loading from 'components/Common/Loading';

const mapStateToProps = state => ({
  isFetching: state.products.isFetching,
  randomProduct: state.products.randomProduct
});

const mapDispatchToProps = dispatch => ({
  fetchRandomProduct: () => dispatch(fetchRandomProduct())
});

class Home extends Component {
  componentDidMount() {
    const { fetchRandomProduct } = this.props;

    fetchRandomProduct && fetchRandomProduct();
  }

  render() {
    const { isFetching, randomProduct } = this.props;

    return (
      <Fragment>
        <h2>Welcome to Chuck Norris App</h2>

        {isFetching
          ? <Loading />
          : <p>{randomProduct.value}</p>
        }
      </Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
