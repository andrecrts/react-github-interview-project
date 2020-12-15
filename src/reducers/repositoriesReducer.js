import initialState from './initialState';
import * as types from '../actions/types';

const repositories = (state = initialState.repositories, action) => {
    switch (action.type) {
        case types.SEARCH_SUCCESS:
            return action.repositories;

        case types.ADD_BOOKMARK:
            return state.map(repository => repository.id === action.payload.id ? {
                    ...repository,
                    is_bookmarked: true
                } : repository);

        case types.REMOVE_BOOKMARK:
            return state.map(repository => repository.id === action.payload ? {
                    ...repository,
                    is_bookmarked: false
                } : repository);

        default:
            return state;
    }
}

export default repositories;