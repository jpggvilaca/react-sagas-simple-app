import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { FETCH_PRODUCTS, FETCH_SUCCESS, FETCH_ERROR } from '../constants';

const initialState = {
  isFetching: false,
  products: [],
  selectedProduct: {}
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, isFetching: true };
    case FETCH_SUCCESS:
      return { ...state, isFetching: false, product: action.payload };
    case FETCH_ERROR:
      return { ...state, isFetching: false };
    default: {
      return state;
    }
  }
};

const reducers = combineReducers({
  router: routerReducer,
  productReducer
});

export default reducers;
