import React, { Component, Fragment } from 'react';
import { ConnectedRouter } from 'react-router-redux';

import Menu from './Menu/Menu';
import MainContent from './MainContent/MainContent';

import { history } from '../store';

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Fragment>
          <Menu />
          <MainContent />
        </Fragment>
      </ConnectedRouter>
    );
  }
}

export default App;
