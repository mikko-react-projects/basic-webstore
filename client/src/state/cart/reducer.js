import {
  FETCH_CART,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  ADD_TO_CART,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  REMOVE_FROM_CART,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE
} from '../actionTypes';

const initialState = {
  isLoading: false,
  cart: { items: [] },
  message: null,
  error: null,
};

export default (state = initialState, action) => {
  switch(action.type) {

    case FETCH_CART:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: action.cart,
      };

    case FETCH_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case ADD_TO_CART:
      return {
        ...state,
        data: action.data,
        isLoading: true,
      };

    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: action.cart,
        message: action.message
      };

    case ADD_TO_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        data: action.data,
        isLoading: true,
      };

    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: action.cart,
      };

    case REMOVE_FROM_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
