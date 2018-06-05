import React from 'react';
import { Route } from "react-router-dom";

import Routes from '../../routeConfig';

import styles from './MainContent.css';

const MainContent  = () => (
  <main className={styles.main}>
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
  </main>
);

export default MainContent;
