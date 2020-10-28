import * as types from './actionTypes';

// Returns an action type to search using an external api
export const searchRepositoriesAction = (payload) => ({
	type: types.SEARCH_REPOSITORIES_REQUEST,
	payload
});
