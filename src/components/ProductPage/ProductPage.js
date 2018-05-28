import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, selectProduct } from 'actions';

import ProductList from 'components/ProductList/ProductList';
import Loading from 'components/Common/Loading';

import styles from './ProductPage.css';

const mapStateToProps = state => ({
  isFetching: state.products.isFetching,
  products: state.products.products
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  selectProduct: category => dispatch(selectProduct(category))
});

class ProductPage extends Component {
  componentDidMount() {
    const { fetchProducts, products } = this.props;

    // Cache values are available so we avoid fetching new data
    if (products.length) { return; }

    fetchProducts && fetchProducts();
  }

  render() {
    const { products, isFetching, selectProduct } = this.props;

    return (
        isFetching
          ? <Loading />
          : <div className={styles.list}>
              <h2 className={styles.header}>Products By Category</h2>
              <ProductList products={products} onSelect={selectProduct} />
            </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
