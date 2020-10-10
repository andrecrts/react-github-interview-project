import { RepositoryType } from '../types/repository';

export const CREATE_BOOKMARK = 'CREATE_BOOKMARK';
export const DELETE_BOOKMARK = 'DELETE_BOOKMARK';

export const createBookmarkAction = (repository: RepositoryType) => ({
  type: CREATE_BOOKMARK,
  payload: {
    repository,
  },
});

export const deleteBookmarkAction = (id: number) => ({
  type: DELETE_BOOKMARK,
  payload: { id },
});
