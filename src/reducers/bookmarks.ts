import { CREATE_BOOKMARK, DELETE_BOOKMARK } from '../actions/bookmark';
import { BookmarkState } from '../types/states';

const initialState: BookmarkState = {
  bookmarks: [],
};

const bookmarkReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_BOOKMARK: {
      return {
        ...state,
        bookmarks: [...state.bookmarks, payload?.repository],
      };
    }
    case DELETE_BOOKMARK: {
      const index = state.bookmarks.findIndex((mark) => mark.id === payload.id);
      if (index !== -1) {
        return {
          ...state,
          bookmarks: [...state.bookmarks.splice(index, 1)],
        };
      }
      return state;
    }
    default:
      return state;
  }
};

export default bookmarkReducer;
