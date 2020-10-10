import { CREATE_BOOKMARK, DELETE_BOOKMARK } from '../actions/bookmark';
import { BookmarkState } from '../types/state';

const initialState: BookmarkState = {
  bookmarks: [],
};

const bookmarkReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_BOOKMARK: {
      const newState = { ...state };
      return newState;
    }
    case DELETE_BOOKMARK: {
      const newState = { ...state };
      delete newState.bookmarks[payload.data.id];
      return newState;
    }
    default:
      return state;
  }
};

export default bookmarkReducer;
