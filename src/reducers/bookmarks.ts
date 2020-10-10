import { CREATE_BOOKMARK, DELETE_BOOKMARK } from '../actions/bookmark';
import { BookmarkState } from '../types/states';

const initialState: BookmarkState = {
  bookmarks: [],
};

const bookmarksReducer = (state = initialState, action: any) => {
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
      console.log(index);
      if (index !== -1) {
        return {
          ...state,
          bookmarks: [...state.bookmarks.slice(0, index), ...state.bookmarks.slice(index + 1)],
        };
      }
      return state;
    }
    default:
      return state;
  }
};

export default bookmarksReducer;
