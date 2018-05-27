import { call, put, takeLatest, all } from 'redux-saga/effects'

import { fetchProducts, fetchedProducts } from 'actions';
import { FETCH_PRODUCTS } from './constants';

import { fetchProductCategories } from './api';

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
//   ... other Routes
// };

const delay = ms => new Promise(res => setTimeout(res, ms));

// function* navigationSaga(action) {
//   const location = action.payload;
//   // const saga = SAGA_ROUTE_MAP[location.pathname];
//
//   if (saga) {
//     yield call(saga, location);
//   }
// }

function* fetchProductsSaga(action) {
  console.log('saga fetchProducts called');
  try {
    const productCategories = yield call(fetchProductCategories);

    yield delay(2000); // To simulate slow loading
    yield put(fetchedProducts(productCategories.data));
  } catch(err) {
    // error handling here
  }

}

export default function* rootSaga() {
  // yield takeLatest('@@router/LOCATION_CHANGE', navigationSaga);
  yield all([
    takeLatest(FETCH_PRODUCTS, fetchProductsSaga)
  ]);
};
