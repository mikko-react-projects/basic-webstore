import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ isAdmin, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAdmin ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )}
  />
);

AdminRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAdmin: PropTypes.string
};

export default AdminRoute;
