import React from 'react';
import ReactDOM from 'react-dom';
import {
  Provider
} from 'react-redux'
import {
  ConnectedRouter
} from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './App';
import store, {
  history
} from './store'


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();