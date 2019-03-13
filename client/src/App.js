import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TopNavigationContainer } from './containers/TopNavigationContainer';
import { ShopContainer } from './containers/ShopContainer';
import { ItemContainer } from './containers/ItemContainer';
import { CartContainer } from './containers/CartContainer';
import { LoginContainer } from './containers/LoginContainer';
import { PanelContainer } from './containers/PanelContainer';
import { AdminRouteContainer } from './containers/AdminRouteContainer';
import { GuestRouteContainer } from './containers/GuestRouteContainer';
import './styles/App.css';

const App = () => (
  <div className="container">
    <TopNavigationContainer />
    <Switch>
      <Route
        path="/"
        exact
        component={ShopContainer}
      />
      <Route
        path='/item/:slug'
        exact
        component={ItemContainer}
      />
      <Route
        path='/cart'
        exact
        component={CartContainer}
      />
      <GuestRouteContainer
        path='/login'
        exact
        component={LoginContainer}
      />
      <AdminRouteContainer
        path='/panel'
        exact
        component={PanelContainer}
      />
    </Switch>
  </div>
)

export default App;
