import React from 'react';
import { string } from 'prop-types';

const ProductDetail = ({ description, bg }) => (
  <div className="product">
    <span style={{backgroundImage: `url(${bg})`}}></span>
    <p>{description}</p>
  </div>
);

ProductDetail.propTypes = { description: string, bg: string };
ProductDetail.defaultProps = { description: '' }
ProductDetail.displayName = 'ProductDetail';

export default ProductDetail;
