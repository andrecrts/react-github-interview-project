import initialState from './initialState';
import * as types from '../actions/actionTypes';

// Handles search related actions
const repositories = (state = initialState.repositories, action) => {

	switch (action.type) {

		// Adds a new list from search
		case types.SEARCH_REPOSITORIES_SUCCESS:

			return action.repositories;

		// Adds item bookmarked prop
		case types.BOOKMARK_ADD:

			return state.map(repository => repository.id === action.payload.id 
				? { ...repository, is_bookmarked: true } 
				: repository
			);

		// Removes item bookmarked prop
		case types.BOOKMARK_REMOVE:

			return state.map(repository => repository.id === action.payload 
				? { ...repository, is_bookmarked: false } 
				: repository
			);

		// Returns same state
		default:

			return state;

	}
}

export default repositories;
