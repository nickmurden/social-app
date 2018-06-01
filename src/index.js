import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
// Higher-order component that attaches our store to our react container components

import registerServiceWorker from './registerServiceWorker';

const store = configureStore(); // Create an instance of our store

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

registerServiceWorker();
