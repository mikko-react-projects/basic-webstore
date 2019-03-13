import { put, fork, takeLatest, call } from 'redux-saga/effects';
import {
  FETCH_PRODUCTS,
  ADD_PRODUCT
} from '../actionTypes';
import {
  fetchProductsSuccess, fetchProductsFailure,
  addProductSuccess, addProductFailure
} from './actions';
import * as stockApi from '../../libs/products/api';
import api from '../../api';

export function* fetchProducts(action) {
  try {
    const products = yield call(stockApi.fetchAll);
    yield put(fetchProductsSuccess(products));
  } catch(error) {
    yield put(fetchProductsFailure(error));
  }
}

export function* addProduct(action) {
  try {
    const product = yield call(api.products.add, action.data);
    yield put(addProductSuccess(product));
  } catch(error) {
    yield put(addProductFailure(error));
  }
}

export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}

export function* watchAddProduct() {
  yield takeLatest(ADD_PRODUCT, addProduct)
}

export default function* () {
  yield fork(watchFetchProducts);
  yield fork(watchAddProduct);
}
