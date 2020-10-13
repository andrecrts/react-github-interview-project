import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './reducers';
import mySaga from './sagas';

const sagaMiddlelware = createSagaMiddleware();
export const middlewares = [sagaMiddlelware];

const store = createStore(
  rootReducers,
  // eslint-disable-next-line no-underscore-dangle
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddlelware.run(mySaga);

export default store;
