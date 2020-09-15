import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { Route } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Joole Inc.
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {/* {!user && ( */}
            <React.Fragment>
              {/* <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink> */}
              <Link className="nav-item nav-link" to="/register">
                Register
              </Link>
              <Route path="/register" component={RegisterForm} />
            </React.Fragment>
          {/* )} */}
          {/* {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/profile">
                {user.name}
              </NavLink>
              <NavLink className="nav-item nav-link" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
