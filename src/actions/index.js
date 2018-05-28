import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  SELECT_PRODUCT,
  SELECT_PRODUCT_SUCCESS,
  SELECT_PRODUCT_ERROR
} from '../constants';

export const fetchProducts = () => {
  console.log('fetchProducts');
  return { type: FETCH_PRODUCTS, isFetching: true };
};

export const fetchedProducts = products => {
  console.log('fetchedProducts: ', products);
  return { type: FETCH_PRODUCTS_SUCCESS, products, isFetching: false };
};

export const fetchProductsError = () => {
  console.log('fetchedProductsError: ');
  return { type: FETCH_PRODUCTS_ERROR, isFetching: false };
}

export const selectProduct = () => {
  console.log('select product');
  return { type: SELECT_PRODUCT, isFetching: true, };
}

export const selectedProduct = product => {
  console.log('select product success');
  return { type: SELECT_PRODUCT_SUCCESS, isFetching: false, selectedProduct: product };
}

export const selectProductError = () => {
  console.log('select product error');
  return { type: SELECT_PRODUCT_ERROR, isFetching: false };
}
