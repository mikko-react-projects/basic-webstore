import React from 'react';
import PropTypes from "prop-types";
import LoginForm from './LoginForm';

const Login = ({ onLoginClick, error }) => (
  <div>
    <LoginForm submit={onLoginClick} error={error} />
  </div>
);

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired
}

export default Login;
