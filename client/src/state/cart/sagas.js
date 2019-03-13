import { put, fork, takeLatest, call } from 'redux-saga/effects';
import { ADD_TO_CART, FETCH_CART, REMOVE_FROM_CART } from '../actionTypes';
import { addToCartSuccess, addToCartFailure,
         fetchCartSuccess, fetchCartFailure,
         removeFromCartSuccess, removeFromCartFailure
} from './actions';
import * as cartApi from '../../libs/cart/api';

export function* fetchCart() {
  try {
    const cart = yield call(cartApi.fetch);
    yield put(fetchCartSuccess(cart));
  } catch(error) {
    yield put(fetchCartFailure(error));
  }
}

export function* addToCart(action) {
  try {
    const cart = yield call(
      cartApi.addToCart,
      action.id,
      action.optionsId,
      action.optionsName,
      action.optionsPrice,
      action.count
    );
    yield put(addToCartSuccess(cart, action.optionsName));
  } catch(error) {
    yield put(addToCartFailure(error));
  }
}

export function* removeFromCart(action) {
  try {
    const cart = yield call(cartApi.removeFromCart, action.data);
    yield put(removeFromCartSuccess(cart));
  } catch(error) {
    yield put(removeFromCartFailure(error));
  }
}

export function* watchFetchCart() {
  yield takeLatest(FETCH_CART, fetchCart);
}

export function* watchAddtoCart() {
  yield takeLatest(ADD_TO_CART, addToCart);
}

export function* watchRemoveFromCart() {
  yield takeLatest(REMOVE_FROM_CART, removeFromCart);
}

export default function* () {
  yield fork(watchFetchCart);
  yield fork(watchAddtoCart);
  yield fork(watchRemoveFromCart);
}
