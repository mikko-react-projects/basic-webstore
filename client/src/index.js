import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import history from './history'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import decode from 'jwt-decode';
import App from './App';
import { persistor, store } from './store';
import registerServiceWorker from './registerServiceWorker';
import { fetchProducts } from './state/products/actions';
import { authLoginSuccess } from './state/auth/actions';
import 'semantic-ui-css/semantic.min.css';

store.dispatch(fetchProducts());

if(localStorage.authJWT) {
  const payload = decode(localStorage.authJWT);
  const user = {
    token: localStorage.authJWT,
    name: payload.name
  };
  store.dispatch(authLoginSuccess(user));
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <Route component={App} />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
