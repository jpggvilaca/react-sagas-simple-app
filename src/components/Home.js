import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";

const Home = () => (
  <Fragment>
    <h2>Welcome</h2>
    <NavLink to={'/movies'} className="home-link">Go to Movie List</NavLink>
  </Fragment>
)

export default Home;
