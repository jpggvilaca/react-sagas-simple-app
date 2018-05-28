import React, { Component, Fragment } from 'react';
import { array } from 'prop-types';

import EmptyState from 'components/Common/EmptyState';

import styles from './ProductList.css';

export class ProductList extends Component {
  static propTypes = { products: array };
  static defaultProps = { products: [] };

  triggerProductDetails = e => {
    const { onSelect } = this.props;
    const productCategory = e.currentTarget.dataset.id;

    onSelect && onSelect(productCategory);
  }

  renderList = () => {
    const { products } = this.props;

    if (!products.length) { return <EmptyState />; }

    return (
      <ul className={styles.list}>
        {products.map((product, i) => (
            <li
              key={`product-${i}`}
              data-id={product}
              className={styles.category}
              onClick={this.triggerProductDetails}
            >
              {product}
            </li>
          ))
        }
      </ul>
    );
  }

  render() {
    return (
      <Fragment>
        { this.renderList() }
      </Fragment>
    );
  };
}

export default ProductList;
