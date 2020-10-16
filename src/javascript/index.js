// import '../css/index.css';
import '../css/index.less';
import React from 'react';
import { render } from 'react-dom';

// redux configuration
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

// reducers
import reducers from 'Reducers';

// main container
import AppContainer from './AppContainer';

const store = createStore(
  reducers, // todos los reducers
  {}, // estado inicial
  applyMiddleware(reduxThunk)
);

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  rootElement
);
