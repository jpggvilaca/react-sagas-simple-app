import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reducers from './reducers';

export const history = createHistory();
const middleware = routerMiddleware(history);
export const store = createStore(
  reducers,
  applyMiddleware(middleware)
);
