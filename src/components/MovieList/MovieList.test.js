import React from 'react';
import { shallow, mount } from 'enzyme';

import { MovieList } from './MovieList';
import EmptyState from 'components/Common/EmptyState';

const mockData = [
  {
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
  },
  {
    "title": "Castle in the Sky 1",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
  },
  {
    "title": "Castle in the Sky 2",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
  }
];

describe('MovieList', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<MovieList />);

    expect(wrapper.length).toEqual(1);
  });

  it('render correctly if the list is null', () => {
    const wrapper = mount(<MovieList />);

    const emptyState = wrapper.find(EmptyState);
    expect(emptyState.length).toEqual(1);
  });

  it('render correctly if the list is empty', () => {
    const wrapper = mount(<MovieList movies={[]} />);

    const emptyState = wrapper.find(EmptyState);
    expect(emptyState.length).toEqual(1);
  });

  it('render n children given a correct list', () => {
    const wrapper = mount(<MovieList movies={mockData} />);

    const list = wrapper.find('li');

    expect(list.length).toEqual(mockData.length);
  });
});
