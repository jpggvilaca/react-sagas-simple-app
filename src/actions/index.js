import {
  FETCH_PRODUCTS,
  FETCH_SUCCESS,
  FETCH_ERROR,
  SELECT_PRODUCT
} from '../constants';

export const fetchProducts = text => {
  return { type: FETCH_PRODUCTS, text }
};

export const selectProduct = product => {
  return { type: SELECT_PRODUCT, product };
}
