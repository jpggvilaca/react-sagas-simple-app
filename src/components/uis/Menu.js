import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loadable from 'react-loadable';
import Loading from './Loading';

const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading
});

const ProductList = Loadable({
  loader: () => import('./ProductList/ProductList'),
  loading: Loading
});

const Menu = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>

      <hr />

      {
        // Move this to MainContent
      }
      <Route exact path="/" component={Home} />
      <Route path="/products" component={ProductList} />
    </div>
  </Router>
);

export default Menu
