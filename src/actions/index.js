import { FETCH_PRODUCTS, FETCH_SUCCESS, FETCH_ERROR } from '../constants';

export function fetchProducts(text) {
  return { type: FETCH_PRODUCTS, text }
}

// export function toggleTodo(index) {
//   return { type: TOGGLE_TODO, index }
// }
// ​
// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter }
// }
