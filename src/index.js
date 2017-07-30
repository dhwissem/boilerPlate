import React from 'react';
import { render } from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import Dashboard from './components/Dashboard';

const store = configureStore();

render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById('app')
);
