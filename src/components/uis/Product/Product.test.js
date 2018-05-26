import React from 'react';
import { mount } from 'enzyme';

import { Product } from './Product';

describe('Product', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Product />);

    expect(wrapper.length).toEqual(1);
  });

  it('sets the background image and description', () => {
    const product = {
      "icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      "id" : "xzXTcsuuS1-6zmkNzcfp4A",
      "url" : "https://api.chucknorris.io/jokes/xzXTcsuuS1-6zmkNzcfp4A",
      "value" : "Chuck Norris wears a size 2 ballet slipper."
    };
    const wrapper = mount(<Product product={product} />);
    const renderedBgImage = wrapper.find('span').props().style.backgroundImage;
    const renderedDescription = wrapper.find('p').props().children;

    expect(renderedBgImage).toEqual(`url(${product.icon_url})`);
    expect(renderedDescription).toEqual(product.value);
  });
});
