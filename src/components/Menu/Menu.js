import React from 'react';
import { NavLink } from "react-router-dom";
import Routes from '../../routeConfig';

import styles from './Menu.css';

const Menu = () => (
  <nav className={styles.navbar}>
    <ul className={styles.links}>
      {Routes.map((route, index) => (
        route.name && <li key={`route-${index}`} className={styles.link}>
          <NavLink exact={route.exact} to={route.path}>{route.name}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
