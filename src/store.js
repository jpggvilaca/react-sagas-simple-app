// Redux
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// React Router
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// Redux Saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

// Redux Persist
import { persistStore } from 'redux-persist';

import reducers from './reducers';

export const history = createHistory();

// Middleware
const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(routerMiddleware, sagaMiddleware)
  )
);

export const persistor = persistStore(store);

window.persistor = persistor; // FOR DEBUG ONLY

sagaMiddleware.run(rootSaga);
