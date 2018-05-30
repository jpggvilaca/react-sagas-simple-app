import React from 'react';
import { shallow, mount } from 'enzyme';

import { Movie } from './Movie';

describe('Movie', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Movie />);

    expect(wrapper.length).toEqual(1);
  });

  it('sets all the fields with the correct props', () => {
    const movie = {
      "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      "title": "Castle in the Sky",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "director": "Hayao Miyazaki",
      "producer": "Isao Takahata",
      "release_date": "1986",
      "rt_score": "95"
    };

    const wrapper = mount(<Movie selectedMovie={movie} />);
    const renderedTitle = wrapper.find('h2').props().children[1];

    expect(renderedTitle).toEqual(movie.title);
  });
});
