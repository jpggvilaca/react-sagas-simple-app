// Main imports
import React from 'react';
import ReactDOM from 'react-dom';

// For offline support
import registerServiceWorker from './registerServiceWorker';

// Redux
import { Provider } from 'react-redux';

// React Router
import { ConnectedRouter } from 'react-router-redux';

// Store
import { store, history, persistor } from './store';

// Redux Persist
import { PersistGate } from 'redux-persist/integration/react';

// Internal components
import App from './components/App';
import Loading from './components/Common/Loading';

// Styles
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <App />
      </PersistGate>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
