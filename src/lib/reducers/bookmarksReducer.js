import initialState from './initialState';
import * as types from '../actions/actionTypes';

// Handles search related actions
const bookmarks = (state = initialState.bookmarks, action) => {
	switch (action.type) {

		// Adding new item to bookmarks
		case types.BOOKMARK_ADD:

			return [
				{...action.payload, is_bookmarked: true},
				...state
			];

		// Removing new item to bookmarks
		case types.BOOKMARK_REMOVE:

			const index = state.findIndex(item => item.id === action.payload )
			return [
				...state.slice(0, index),
				...state.slice(index + 1)
			];

		// Returns same state
		default:

			return state;
			
	}
}

export default bookmarks;
