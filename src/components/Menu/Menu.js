import React from 'react';
import { NavLink } from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../../store';
import Routes from '../../routeConfig';

import styles from './Menu.css';

const Menu = () => (
  <ConnectedRouter history={history}>
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        {Routes.map((route, index) => (
          route.name && <li key={`route-${index}`} className={styles.link}>
            <NavLink exact={route.exact} to={route.path}>{route.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </ConnectedRouter>
);

export default Menu;
