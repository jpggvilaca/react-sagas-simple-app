import React, { Component } from 'react';
import { array } from 'prop-types';

import Product from 'components/Product/Product';
import EmptyState from 'components/Common/EmptyState';

export class ProductList extends Component {
  static propTypes = { products: array };
  static defaultProps = { products: [] };

  renderList = () => {
    const { products } = this.props;

    if (!products.length) { return <EmptyState />; }

    return (
      <ul>
        {products.map((product, i) => (
            <li key={`product-${i}`}>
              {
                // <Product product={product} />
              }
              {product}
            </li>
          ))
        }
      </ul>
    );
  }

  render() {
    return (
      <div>
        { this.renderList() }
      </div>
    );
  };
}

export default ProductList;
