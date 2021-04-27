import * as _ from 'lodash';

import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import Saga from './SagaMiddleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './rootReducers';
import storage from 'redux-persist/lib/storage';

// Config redux persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['TemplateState'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  _.has(window, '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__')
    ? composeWithDevTools({ trace: true, traceLimit: 1000 })
    : compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

export const persistor = persistStore(store);
sagaMiddleware.run(Saga);
