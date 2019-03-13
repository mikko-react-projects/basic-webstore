import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE
} from '../actionTypes';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: true,
        data: [],
      }

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      }

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case ADD_PRODUCT:
      return {
        ...state,
        loading: true,
        data: action.data,
      }

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      }

    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state;
  }
}
