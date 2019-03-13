import React from 'react';
import { Link } from "react-router-dom";
import { Menu, Image, Grid } from "semantic-ui-react";
import PropTypes from "prop-types";
import ButtonPopup from './ButtonPopup';
import himmeeLogo from '../../img/himmee-logo.png';
import '../../styles/TopNavigation.css';

const TopNavigation = ({ cart, isLogin, onLogoutClick }) => (
  <Menu secondary style={{ backgroundColor: "#ffffff" }}>
    <Menu.Item>
      <Image src={himmeeLogo} width='216px' height='47px' />
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>
        {!isLogin ? <Link to="/login">login</Link> :
        <a href={null} onClick={() => {onLogoutClick()}}>logout</a>}<Link to="/panel">panel</Link>
      </Menu.Item>
      <Menu.Item>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Link to="/">HOME</Link>
            </Grid.Column>
            <Grid.Column>
              <Link to="/shop">SHOP</Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Menu.Item>
      <Menu.Item as={Link} to="/cart">
        <ButtonPopup cart={cart} />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

TopNavigation.propTypes = {
  cart: PropTypes.array.isRequired,
  isLogin: PropTypes.string
};

export default TopNavigation;
