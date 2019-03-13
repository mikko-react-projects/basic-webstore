import { combineReducers} from 'redux';
import products from './products/reducer';
import cart from './cart/reducer';
import auth from './auth/reducer';

export default combineReducers({
  products,
  cart,
  auth
});
