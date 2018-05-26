import React, { Component } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';

import { selectProduct } from 'actions';

const mapStateToProps = state => ({
    selectedProduct: state.products.selectedProduct
});

const mapDispatchToProps = dispatch => ({
  selectProduct: product => dispatch(selectProduct(product))
})

export class Product extends Component {
  handleClick = () => {
    const { product, selectProduct } = this.props;

    selectProduct(product);
  }

  render() {
    const { icon_url, value } = this.props.product;

    return (
      <div className="product" onClick={this.handleClick}>
        <span style={{backgroundImage: `url(${icon_url})`}}></span>
        <p>{value}</p>
      </div>
    );
  }
};

Product.propTypes = { product: object };
Product.defaultProps = {
  product: {
    icon_url: 'http://www.amtraksolar.com/wp-content/themes/456ecology/assets//img/no-product-image.png',
    value: 'No description available'
  }
};
Product.displayName = 'Product';

export default connect(mapStateToProps, mapDispatchToProps)(Product);
