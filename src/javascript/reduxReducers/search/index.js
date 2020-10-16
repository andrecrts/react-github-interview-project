import { UPDATE_SEARCH_LIST, DELETE_SEARCH_LIST } from 'Types';

const INITIAL_STATE = {
  currentList: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_LIST:
      return {
        ...state,
        currentList: action.payload
      };

    case DELETE_SEARCH_LIST:
      return {
        ...state,
        currentList: []
      };

    default:
      return state;
  }
};
