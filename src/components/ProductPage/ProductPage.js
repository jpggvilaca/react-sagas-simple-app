import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import ProductList from 'components/ProductList/ProductList';

const mapStateToProps = state => ({
    products: state.products.products
});

class ProductPage extends Component {
  render() {
    const { products } = this.props;

    return (
      <Fragment>
        <h2>Products By Category</h2>
        <ProductList products={products} />
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, null)(ProductPage);
