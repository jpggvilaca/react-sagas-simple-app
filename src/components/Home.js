import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";

const Home = () => (
  <Fragment>
    <h1>Welcome</h1>
    <NavLink to={'/movies'} className="home-link">Go to Movie List</NavLink>
  </Fragment>
)

export default Home;
