import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  SELECT_PRODUCT
} from '../constants';

export const fetchProducts = () => {
  console.log('fetchProducts');
  return { type: FETCH_PRODUCTS, isFetching: true };
};

export const fetchedProducts = products => {
  console.log('fetchedProducts: ', products);
  return { type: FETCH_PRODUCTS_SUCCESS, products, isFetching: false };
};

export const selectProduct = product => {
  return { type: SELECT_PRODUCT, product };
}
