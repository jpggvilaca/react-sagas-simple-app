import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  SELECT_PRODUCT,
  SELECT_PRODUCT_SUCCESS,
  SELECT_PRODUCT_ERROR,
  FETCH_RANDOM_PRODUCT,
  FETCH_RANDOM_PRODUCT_SUCCESS,
  FETCH_RANDOM_PRODUCT_ERROR
} from '../constants';

export const fetchRandomProduct = () => {
  return { type: FETCH_RANDOM_PRODUCT, isFetching: true };
}

export const fetchedRandomProduct = product => {
  return { type: FETCH_RANDOM_PRODUCT_SUCCESS, isFetching: false, randomProduct: product };
}

export const fetchedRandomProductError = err => {
  console.log(err);
  return { type: FETCH_RANDOM_PRODUCT_ERROR, isFetching: false };
}

export const fetchProducts = () => {
  return { type: FETCH_PRODUCTS, isFetching: true };
};

export const fetchedProducts = products => {
  return { type: FETCH_PRODUCTS_SUCCESS, products, isFetching: false };
};

export const fetchProductsError = err => {
  console.log(err);
  return { type: FETCH_PRODUCTS_ERROR, isFetching: false };
}

export const selectProduct = category => {
  return { type: SELECT_PRODUCT, isFetching: true, category };
}

export const selectedProduct = product => {
  return { type: SELECT_PRODUCT_SUCCESS, isFetching: false, selectedProduct: product };
}

export const selectProductError = () => {
  return { type: SELECT_PRODUCT_ERROR, isFetching: false };
}
