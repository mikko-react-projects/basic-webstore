import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const GuestRoute = ({ isAdmin, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isAdmin ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )}
  />
);

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAdmin: PropTypes.string
};

export default GuestRoute;
