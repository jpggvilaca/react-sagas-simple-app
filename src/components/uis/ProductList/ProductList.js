import React, { Component } from 'react';
import { array } from 'prop-types';

import Product from 'components/Product/Product';
import EmptyState from 'components/EmptyState';

// Remove this
const mockData = [
    {
    "icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id" : "xzXTcsuuS1-6zmkNzcfp4A",
    "url" : "https://api.chucknorris.io/jokes/xzXTcsuuS1-6zmkNzcfp4A",
    "value" : "Chuck Norris wears a size 2 ballet slipper."
  },
  {
    "icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id" : "xzXTcsuuS1-6zmkNzcfp4A",
    "url" : "https://api.chucknorris.io/jokes/xzXTcsuuS1-6zmkNzcfp4A",
    "value" : "Chuck Norris wears a size 2 ballet slipper. - 2"
  },
  {
    "icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id" : "xzXTcsuuS1-6zmkNzcfp4A",
    "url" : "https://api.chucknorris.io/jokes/xzXTcsuuS1-6zmkNzcfp4A",
    "value" : "Chuck Norris wears a size 2 ballet slipper. - 3"
  }
];

class ProductList extends Component {
  static propTypes = { products: array };
  static defaultProps = { products: [] };

  renderList = () => {
    const { products } = this.props;

    if (!mockData.length) { return <EmptyState />; }

    return (
      <ul>
        {
          mockData.map(({ value, icon_url }, i) => (
            <li key={`product-${i}`}>
              <Product
                description={value}
                bg={icon_url}
              />
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
