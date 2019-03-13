import React from 'react';
import PropTypes from "prop-types";
import '../../styles/Cart.css';

const Total = ({ cart }) => (
  <table className='cart-total'>
    <thead>
      <tr>
        <th>CART TOTALS</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>SUB TOTAL</td>
        <td>
          {cart.length ? cart.reduce((acc, item) => (
            acc + item.price * item.qty
           ), 0).toFixed(2) : Number(0).toFixed(2)}
        </td>
      </tr>
    </tbody>
  </table>
);

Total.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default Total;
