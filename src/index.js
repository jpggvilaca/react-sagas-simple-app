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
import { store, history } from './store';

// Internal components
import App from './components/App';

// Styles
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
