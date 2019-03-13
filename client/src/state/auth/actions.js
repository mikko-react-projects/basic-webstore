import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAILURE
} from '../actionTypes';

export const authLogin = data => ({
  type: AUTH_LOGIN,
  data
})

export const authLoginSuccess = data => ({
  type: AUTH_LOGIN_SUCCESS,
  data
})

export const authLoginFailure = error => ({
  type: AUTH_LOGIN_FAILURE,
  error
})

export const authLogout = () => ({
  type: AUTH_LOGOUT
})

export const authLogoutSuccess = () => ({
  type: AUTH_LOGOUT_SUCCESS
})

export const authLogoutFailure = error => ({
  type: AUTH_LOGOUT_FAILURE,
  error
})
