import React from 'react';
import { mount } from 'enzyme';

import { Movie } from './Movie';

describe('Movie', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Movie />);

    expect(wrapper.length).toEqual(1);
  });

  // it('sets the background image and description', () => {
  //   const movie = {
  //     "icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  //     "id" : "xzXTcsuuS1-6zmkNzcfp4A",
  //     "url" : "https://api.chucknorris.io/jokes/xzXTcsuuS1-6zmkNzcfp4A",
  //     "value" : "Chuck Norris wears a size 2 ballet slipper."
  //   };
  //   const wrapper = mount(<Movie movie={movie} />);
  //   const renderedBgImage = wrapper.find('span').props().style.backgroundImage;
  //   const renderedDescription = wrapper.find('p').props().children;
  //
  //   expect(renderedBgImage).toEqual(`url(${movie.icon_url})`);
  //   expect(renderedDescription).toEqual(movie.value);
  // });
});
