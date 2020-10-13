import { combineReducers } from 'redux';
import bookmarksReducer from './bookmarks';
import repositoryReducer from './repository';

const rootReducers = combineReducers({
  repositoryReducer,
  bookmarksReducer,
});

export default rootReducers;
