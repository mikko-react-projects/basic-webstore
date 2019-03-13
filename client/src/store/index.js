import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from '../state/sagas';
import reducers from '../state/reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
 key: 'root',
 storage: storage,
};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
                        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));

const pReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  pReducer,
  enhancers,
);

sagas.map(sagaMiddleware.run);

export const persistor = persistStore(store);
