import React from 'react';
import PropTypes from "prop-types";
import { Popup, Image, Icon, Label } from "semantic-ui-react";
import '../../styles/TopNavigation.css';

const ButtonPopup = ({ cart }) => (
    <Popup basic trigger={<div>
          <Icon bordered link fitted name='shop' size='large' />
          {cart.length !== 0 ?
            (<Label circular color='red' size='mini' floating>
              {cart.length}
            </Label>) :
            null }
        </div>} flowing hoverable>

        <div>
          {cart.map(item => (
            <div className="cart-item" key={item.name}>
              <div>
                <Image src={item.productImage} size="tiny" />
              </div>
              <div>
                <p><b>{item.name}</b><br />{item.qty} x <b>{item.price} €</b></p>
              </div>
            </div>
          ))}
        </div>

    </Popup>
);

ButtonPopup.propTypes = {
  cart: PropTypes.array.isRequired
};

export default ButtonPopup;
