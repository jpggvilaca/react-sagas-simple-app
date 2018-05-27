import React, { Component, Fragment } from 'react';
import Menu from './Menu/Menu';
import MainContent from './MainContent/MainContent';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Menu />
        <MainContent />
      </Fragment>
    );
  }
}

export default App;
