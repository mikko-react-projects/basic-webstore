import React from 'react';
import PropTypes from "prop-types";

const CartItem = ({ id, name, price, productImage, qty, onRemoveClick}) => (
  <tr key={id}>
    <td>
      <a
        href={null}
        className='cart-item-delete'
        onClick={(e) => {
          onRemoveClick(e, id);
        }}
      >
        ×
      </a>
    </td>
    <td><img src={productImage} alt={name} style={{ width: "70px" }}/></td>
    <td>{name}</td>
    <td>{price}</td>
    <td>{qty}</td>
    <td>{price * qty}</td>
  </tr>
);

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  productImage: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};

export default CartItem;
