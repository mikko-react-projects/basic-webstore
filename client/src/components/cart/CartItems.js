import React from 'react';
import PropTypes from "prop-types";
import CartItem from './CartItem';
import '../../styles/Cart.css';

const CartItems = ({ cart, onRemoveClick }) => {
  if (!cart.length) {
    return <p className='empty-cart'>Cart is empty</p>;
  }

  return (
    <table className="cart-header-data">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>PRODUCT</th>
          <th>PRICE</th>
          <th>QUANTITY</th>
          <th>TOTAL</th>
        </tr>

      </thead>
      <tbody align="center">
      {cart.map(item =>
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          productImage={item.productImage}
          qty={item.qty}
          onRemoveClick={(e, id) => onRemoveClick(e, id)}
        />
      )}
      </tbody>
    </table>
  );
};

CartItems.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productImage: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onRemoveClick: PropTypes.func.isRequired
};

export default CartItems;
