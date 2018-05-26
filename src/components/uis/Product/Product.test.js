import React from 'react';
import { mount } from 'enzyme';

import Product from './Product';

describe('Product', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Product />);

    expect(wrapper.length).toEqual(1);
  });

  it('sets the background image and description', () => {
    const mockProps = {
      bg: 'stuff',
      description: 'wow'
    };
    const wrapper = mount(<Product {...mockProps} />);
    const renderedBgImage = wrapper.find('span').props().style.backgroundImage;
    const renderedDescription = wrapper.find('p').props().children;

    expect(renderedBgImage).toEqual(`url(${mockProps.bg})`);
    expect(renderedDescription).toEqual(mockProps.description);
  });
});
