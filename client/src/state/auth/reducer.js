import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAILURE  
} from '../actionTypes';

const initialState = {
  data: [],
  loading: false,
  success: false,
  error: []
}

export default function auth (state = initialState, action) {
  switch(action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        data: action.data,
        loading: true,
        success: false,
        error: []
      }
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        success: true,
        error: []
      }
    case AUTH_LOGIN_FAILURE:
      return {
        ...state,
        data: [],
        loading: false,
        success: false,
        error: action.error
      }
    case AUTH_LOGOUT:
      return {
        ...state,
        data: [],
        loading: true,
        success: false,
        error: []
      }
    case AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        data: [],
        loading: false,
        success: true,
        error: []
      }
    case AUTH_LOGOUT_FAILURE:
      return {
        ...state,
        data: [],
        loading: false,
        success: false,
        error: action.error
      }
    default:
      return state;
  }
}
