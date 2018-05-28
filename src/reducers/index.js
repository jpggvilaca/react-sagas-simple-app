import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { persistReducer } from 'redux-persist';
import { REHYDRATE } from 'redux-persist/lib/constants';
import storage from 'redux-persist/lib/storage';

import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  SELECT_PRODUCT,
  SELECT_PRODUCT_SUCCESS,
  SELECT_PRODUCT_ERROR
} from '../constants';

const initialState = {
  isFetching: false,
  products: [],
  selectedProduct: {}
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, isFetching: true };
    case FETCH_PRODUCTS_SUCCESS:
    return { ...state, isFetching: false, products: action.products }
    case FETCH_PRODUCTS_ERROR:
      return { ...state, isFetching: false };
    case SELECT_PRODUCT:
      return { ...state, isFetching: true };
    case SELECT_PRODUCT_SUCCESS:
      return { ...state, selectedProduct: action.product };
    case SELECT_PRODUCT_ERROR:
      return { ...state, isFetching: false };
    case REHYDRATE:
      return { ...state, persistedState: action.payload };
    default: {
      return state;
    }
  }
};

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['isFetching']
}

const reducers = combineReducers({
  router: routerReducer,
  products: persistReducer(persistConfig, productReducer)
});

export default reducers;
