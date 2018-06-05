// Main imports
import React from 'react';
import ReactDOM from 'react-dom';

// For offline support
import registerServiceWorker from './registerServiceWorker';

// Redux
import { Provider } from 'react-redux';

// Store
import { store, persistor } from './store';

// Redux Persist
import { PersistGate } from 'redux-persist/integration/react';

// Internal components
import App from './components/App';
import Loading from './components/Common/Loading';

// Styles
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
