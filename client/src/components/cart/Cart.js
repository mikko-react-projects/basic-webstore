import React from 'react';
import PropTypes from "prop-types";
import Total from './Total';
import CartItems from './CartItems';
import '../../styles/Cart.css';

const Cart = ({ cart, onRemoveClick }) => (
  <div className='cart'>
    <div className="cart-data">
      <CartItems
        cart={cart}
        onRemoveClick={onRemoveClick}
      />
    </div>
    <div className="total-data" align="center">
      <Total cart={cart} />
    </div>
  </div>
);

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  onRemoveClick: PropTypes.func.isRequired
};

export default Cart;
