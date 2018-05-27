import React from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../store';
import Loadable from 'react-loadable';
import Loading from './Common/Loading';

const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading
});

const ProductPage = Loadable({
  loader: () => import('./ProductPage/ProductPage'),
  loading: Loading
});

const Menu = () => (
  <ConnectedRouter history={history}>
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
          {
            // TODO: use navlink instead of link
          }
        </li>
      </ul>

      <hr />

      {
        // Move this to MainContent
      }
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={ProductPage} />
      </Switch>
    </div>
  </ConnectedRouter>
);

export default Menu;
