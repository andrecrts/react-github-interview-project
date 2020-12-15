import { combineReducers } from 'redux';

import repositories from './repositoriesReducer';
import bookmarks from './bookmarksReducer';

const rootReducer = combineReducers({
	repositories,
	bookmarks
});

export default rootReducer;