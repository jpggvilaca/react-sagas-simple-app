import React from 'react';
import { string } from 'prop-types';

const Product = ({ description, bg }) => (
  <div className="product">
    <span style={{backgroundImage: `url(${bg})`}}></span>
    <p>{description}</p>
  </div>
);

Product.propTypes = { description: string, bg: string };
Product.defaultProps = { description: '' }
Product.displayName = 'Product';

export default Product;
