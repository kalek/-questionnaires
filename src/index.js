import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './reducers';
import ReactDOM from 'react-dom';
import App from './App';
import {config} from './app.config';
import './index.css';

let store;

if (config.REDUX_DEV_TOOLS) {
  /* eslint-disable */
  store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  /* eslint-enable */
} else {
  store = createStore(rootReducer);
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);