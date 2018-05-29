import React from 'react';
import { mount } from 'enzyme';

import { MovieList } from './MovieList';

describe('MovieList', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<MovieList />);

    expect(wrapper.length).toEqual(1);
  });

  // it('render correctly if the list is null', () => {
  //   const wrapper = mount(<MovieList />);
  //
  //   expect()
  // });

  // it('render correctly if the list is empty', () => {
  //   const wrapper = mount(<MovieList movies={[]} />);
  //
  //   console.log(wrapper);
  // });

  // it('render n children given a correct list', () => {
  //   const wrapper = mount(<MovieList movies={mockData} />);
  //
  //   expect()
  // });
});
