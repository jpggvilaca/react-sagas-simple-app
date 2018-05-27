import { call, put, takeLatest, select } from 'redux-saga/effects'

import { fetchProducts } from 'actions';

import { fetchProductCategories } from './api';

const SAGA_ROUTE_MAP = {
  '/products': fetchProductsSaga
};

const delay = ms => new Promise(res => setTimeout(res, ms));
const getProducts = state => state.products.products;

function* navigationSaga(action) {
  console.log('navigationSaga called', action);
  const products = yield select(getProducts);
  const location = action.payload;
  const saga = SAGA_ROUTE_MAP[location.pathname];

  if (saga && !products.length) {
    yield call(saga, location);
  }
}

function* fetchProductsSaga(action) {
  console.log('saga fetchProducts called');
  const productCategories = yield call(fetchProductCategories);

  yield delay(3000);
  yield put(fetchProducts(productCategories.data));
}

export default function* rootSaga() {
  yield takeLatest('@@router/LOCATION_CHANGE', navigationSaga);
};
