import { CREATE_BOOKMARK, DELETE_BOOKMARK } from '../actions/bookmark';
import { BookmarkState } from '../types/states';

const initialState: BookmarkState = {
  bookmarks: JSON.parse(localStorage.getItem('bookmarks') ?? '[]') || [],
};

const bookmarksReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_BOOKMARK: {
      const bookmarks = [...state.bookmarks, payload?.repository];
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      return {
        ...state,
        bookmarks,
      };
    }
    case DELETE_BOOKMARK: {
      const index = state.bookmarks.findIndex((mark) => mark.id === payload.id);
      if (index !== -1) {
        const bookmarks = [...state.bookmarks.slice(0, index), ...state.bookmarks.slice(index + 1)];
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        return {
          ...state,
          bookmarks,
        };
      }
      return state;
    }
    default:
      return state;
  }
};

export default bookmarksReducer;
