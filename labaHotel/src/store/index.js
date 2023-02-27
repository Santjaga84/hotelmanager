import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './reducers/index';
import rootSaga from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

//Подключение Redax saga и запуск middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

export default store;