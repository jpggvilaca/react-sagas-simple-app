import React, { Component } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  selectedProduct: state.products.selectedProduct
});

export class Product extends Component {
  render() {
    console.log('Product: ', this.props);
    const { icon_url, value, id } = this.props.selectedProduct;

    return (
      <div className="product">
        <span style={{backgroundImage: `url(${icon_url})`}}></span>
        <p>{id}</p>
        <p>{value}</p>
      </div>
    );
  }
};

Product.propTypes = { selectedProduct: object };
Product.defaultProps = {
  selectedProduct: {
    icon_url: 'http://www.amtraksolar.com/wp-content/themes/456ecology/assets//img/no-product-image.png',
    value: 'No description available'
  }
};
Product.displayName = 'Product';

export default withRouter(connect(mapStateToProps, null)(Product));
