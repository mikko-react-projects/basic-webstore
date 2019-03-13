import { put, fork, takeLatest, call } from 'redux-saga/effects';
import history from '../../history';
import api from '../../api';
import {
  AUTH_LOGIN,
  AUTH_LOGOUT
} from '../actionTypes';
import {
  authLoginSuccess, authLoginFailure,
  authLogoutSuccess, authLogoutFailure,
} from './actions';

export function* authLogin(action) {
  try {
    const auth = yield call(api.auth.login, action.data);
    localStorage.authJWT = auth.user.token;
    yield put(authLoginSuccess(auth));
    yield call([history, history.push], '/');
  } catch(error) {
    yield put(authLoginFailure(error.response.data));
  }
}

export function* authLogout(action) {
  try {
    localStorage.removeItem('authJWT');
    yield put(authLogoutSuccess());
    yield call([history, history.push], '/');
  } catch(error) {
    yield put(authLogoutFailure(error));
  }
}

export function* watchAuthLogin() {
  yield takeLatest(AUTH_LOGIN, authLogin);
}

export function* watchAuthLogout() {
  yield takeLatest(AUTH_LOGOUT, authLogout);
}

export default function* () {
  yield fork(watchAuthLogin);
  yield fork(watchAuthLogout);
}
