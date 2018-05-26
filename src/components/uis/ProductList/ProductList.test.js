import React from 'react';
import { shallow, mount } from 'enzyme';

import ProductList from './ProductList';

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

describe('ProductList', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<ProductList />);

    expect(wrapper.length).toEqual(1);
  });

  // it('render correctly if the list is null', () => {
  //   const wrapper = mount(<ProductList />);
  //
  //   expect()
  // });

  it('render correctly if the list is empty', () => {
    const wrapper = mount(<ProductList products={[]} />);

    console.log(wrapper);
  });

  // it('render n children given a correct list', () => {
  //   const wrapper = mount(<ProductList products={mockData} />);
  //
  //   expect()
  // });
});
