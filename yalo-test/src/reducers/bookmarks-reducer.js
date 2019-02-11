import { types } from '../actions/bookmark-actions';

const initialState = {
  bookmarks: {},
};

const bookmarkReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CREATE: {
      const newState = { ...state };
      console.log(payload);
      newState.bookmarks[payload.data.id] = payload.data;
      return newState;
    }
    case types.DELETE: {
      const newState = { ...state };
      delete newState.bookmarks[payload.data.id];
      return newState;
    }
    default:
      return state;
  }
};

export default bookmarkReducer;
