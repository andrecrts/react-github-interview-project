import * as types from './actionTypes';

// Returns an action type to add a new bookmark
export const repositoryAddAction = (payload) => ({
	type: types.BOOKMARK_ADD,
	payload
});

// Returns an action type to remove a bookmark
export const repositoryRemoveAction = (payload) => ({
	type: types.BOOKMARK_REMOVE,
	payload
});
