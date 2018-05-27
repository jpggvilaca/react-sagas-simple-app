import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from 'actions';

import ProductList from 'components/ProductList/ProductList';
import Loading from 'components/Common/Loading';

const mapStateToProps = state => ({
    isFetching: state.products.isFetching,
    products: state.products.products
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
});

class ProductPage extends Component {
  componentDidMount() {
    const { fetchProducts } = this.props;

    fetchProducts && fetchProducts();
  }

  render() {
    const { products, isFetching } = this.props;

    return (
        isFetching
          ? <Loading />
          : <Fragment>
              <h2>Products By Category</h2>
              <ProductList products={products} />
            </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
