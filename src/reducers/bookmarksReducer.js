import initialState from './initialState';
import * as types from '../actions/types';

const bookmarks = (state = initialState.bookmarks, action) => {
    switch (action.type) {
        case types.ADD_BOOKMARK:
            return [
                {...action.payload, is_bookmarked: true},
                ...state
            ];
        
        case types.REMOVE_BOOKMARK:
            const index = state.findIndex(item => item.id === action.payload)
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
    
        default:
            return state;
    }
}

export default bookmarks;