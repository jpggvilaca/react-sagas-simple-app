import {
  FETCH_PRODUCTS,
  FETCH_SUCCESS,
  FETCH_ERROR,
  SELECT_PRODUCT
} from '../constants';

export const fetchProducts = products => {
  console.log('fetchProducts: ', products);
  return { type: FETCH_PRODUCTS, products };
};

export const selectProduct = product => {
  return { type: SELECT_PRODUCT, product };
}
