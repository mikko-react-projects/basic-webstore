import { connect } from 'react-redux';
import TopNavigation from '../components/navigation/TopNavigation';
import { authLogout } from '../state/auth/actions';

const mapStateToProps = (state) => ({
  cart: state.cart.cart.items.map(cartItem => {
    const item = state.products.data.find(products =>
      cartItem.id === products.id);
    return {
      id: cartItem.id,
      name: cartItem.optionsName,
      price: cartItem.optionsPrice,
      productImage: item.productThumbnail[0],
      qty: cartItem.qty
    };
  }),
  isLogin: state.auth.data.user
})

const mapDispatchToProps = (dispatch) => ({
  onLogoutClick: () => {
    dispatch(authLogout())
  }
});

export const TopNavigationContainer = connect(mapStateToProps, mapDispatchToProps)(TopNavigation);
