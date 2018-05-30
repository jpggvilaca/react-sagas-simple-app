import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import MoviePage from 'components/MoviePage/MoviePage';

import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const mockState = {
  isFetching: false,
  movies: [],
  fetchMovies: () => {},
  selectMovies: () => {},
};

const mountComponent = store => (
  mount(
    <Provider store={store}>
      <MoviePage store={store} />
    </Provider>
  )
)

describe('MoviePage', () => {
  let store;

  beforeEach(() => {
    store = mockStore(mockState);
  });

  it('renders without crashing', () => {
    const wrapper = mountComponent(store);

    expect(wrapper.length).toEqual(1);
  });
});
