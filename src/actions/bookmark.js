import * as types from './types';

export const addAction = (payload) => ({
    type: types.ADD_BOOKMARK,
    payload
});

export const removeAction = (payload) => ({
    type: types.REMOVE_BOOKMARK,
    payload
});