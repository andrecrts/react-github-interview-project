export const CREATE_BOOKMARK = 'CREATE_BOOKMARK';
export const DELETE_BOOKMARK = 'DELETE_BOOKMARK';

const createBookmark = (name: string) => ({
  type: CREATE_BOOKMARK,
  name,
});

const deleteBookmark = (name: string) => ({
  type: DELETE_BOOKMARK,
  name,
});

export default {
  createBookmark,
  deleteBookmark,
};
