import { connect } from 'react-redux';
import Cart from '../components/cart/Cart';
import { removeFromCart } from '../state/cart/actions';

const mapStateToProps = (state) => ({
    cart: state.cart.cart.items.map(cartItem => {
      const item = state.products.data.find(products =>
        cartItem.id === products.id);
      return {
        id: cartItem.optionsId,
        name: cartItem.optionsName,
        price: cartItem.optionsPrice,
        productImage: item.productThumbnail[0],
        qty: cartItem.qty
      };
    })
})

const mapDispatchToProps = (dispatch) => ({
  onRemoveClick: (e, id) => {
    e.preventDefault();
    dispatch(removeFromCart(id))
  }
});


export const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);
