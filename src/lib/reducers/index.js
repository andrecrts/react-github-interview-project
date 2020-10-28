import { combineReducers } from 'redux';

// Reducers
import repositories from './repositoriesReducer';
import bookmarks from './bookmarksReducer';

// Combines into a single reducer
const rootReducer = combineReducers({
	repositories,
	bookmarks
});

export default rootReducer;
