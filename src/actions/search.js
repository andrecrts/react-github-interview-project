import * as types from './types';

export const searchAction = (payload) => ({
    type: types.SEARCH_REQUEST,
    payload
});