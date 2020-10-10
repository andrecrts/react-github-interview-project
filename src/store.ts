import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import bookmarksReducer from './reducers/bookmarks';
import repositoryReducer from './reducers/repository';
import mySaga from './sagas';

const reducers = combineReducers({
  repositoryReducer,
  bookmarksReducer,
});

const sagaMiddlelware = createSagaMiddleware();

const store = createStore(
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  composeWithDevTools(
    applyMiddleware(sagaMiddlelware),
  ),
);

sagaMiddlelware.run(mySaga);

export default store;
