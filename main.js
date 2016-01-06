import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App.js';
import configureStore from './stores/ConfigureStore';

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
 document.getElementById('app'));
