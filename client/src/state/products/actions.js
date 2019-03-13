import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE
} from '../actionTypes';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS
});

export const fetchProductsSuccess = (data) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  data
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  error
});

export const addProduct = (data) => ({
  type: ADD_PRODUCT,
  data
});

export const addProductSuccess = (data) => ({
  type: ADD_PRODUCT_SUCCESS,
  data
});

export const addProductFailure = (error) => ({
  type: ADD_PRODUCT_FAILURE,
  error
})
