import { call, put, takeLatest, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import {
  fetchedProducts,
  fetchProductsError,
  fetchedRandomProduct,
  fetchedRandomProductError,
  selectedProduct,
  selectProductError
} from 'actions';

import {
  FETCH_PRODUCTS,
  FETCH_RANDOM_PRODUCT,
  SELECT_PRODUCT
} from './constants';

import {
  fetchRandomProduct,
  fetchProductCategories,
  fetchProductByCategory
} from './api';

// Simple delay method to fake slow network
const delay = ms => new Promise(res => setTimeout(res, ms));

/*
  NOTE:

  Commented code was from the first iteration of the solution.
  navigationSaga would listen for route changes and trigger the right
  watcher saga according to the current url, but given a second thought it might
  be easier and more scalable if the dispatches are on the component containers
  and not all packed here.

*/

// const SAGA_ROUTE_MAP = {
//   '/products': fetchProductsSaga
//   ... other routes here
// };

// function* navigationSaga(action) {
//   const location = action.payload;
//   const saga = SAGA_ROUTE_MAP[location.pathname];
//
//   if (saga) {
//     yield call(saga, location);
//   }
// }

function* homeSaga() {
  try {
    const randomProduct = yield call(fetchRandomProduct);

    yield put(fetchedRandomProduct(randomProduct.data))
  } catch (err) {
    console.log(err);
    yield put(fetchedRandomProductError(err))
  }
}

function* fetchProductsSaga() {
  try {
    const productCategories = yield call(fetchProductCategories);

    yield delay(1000); // To simulate slow loading
    yield put(fetchedProducts(productCategories.data));
  } catch(err) {
    console.log(err);
    yield put(fetchProductsError(err));
  }
}

function* fetchSingleProductSaga(action) {
  try {
    const { category } = action;
    const product = yield call(fetchProductByCategory, category);

    yield delay(1000); // To simulate slow loading
    yield put(push(`/products/${category}`));
    yield put(selectedProduct(product.data));
  } catch(err) {
    console.log(err);
    yield put(selectProductError(err));
  }
}

export default function* rootSaga() {
  // yield takeLatest('@@router/LOCATION_CHANGE', navigationSaga);
  yield all([
    takeLatest(FETCH_RANDOM_PRODUCT, homeSaga),
    takeLatest(FETCH_PRODUCTS, fetchProductsSaga),
    takeLatest(SELECT_PRODUCT, fetchSingleProductSaga)
  ]);
};
