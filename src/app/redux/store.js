import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import itemReducer from '../redux/items/items';

const reducer = combineReducers({
  items: itemReducer,

  // Add other reducers here
});

const composed = compose(applyMiddleware(thunkMiddleware, logger));

const store = configureStore({ reducer, composed });

export default store;