import React from 'react';
import { Route } from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux';

import { history } from '../../store';
import Routes from '../../routeConfig';

import styles from './MainContent.css';

const MainContent  = () => (
  <main className={styles.main}>
    <ConnectedRouter history={history}>
      <div>
        {Routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))
        }
      </div>
    </ConnectedRouter>
  </main>
);

export default MainContent;
