import { RepositoryType } from './repository';

export type RepositoryState = {
  repositories: RepositoryType[];
  totalCount: number;
  page: number;
};

export type BookmarkState = {
  bookmarks: RepositoryType[];
};

export type RootState = {
  repositoryReducer: RepositoryState;
  bookmarksReducer: BookmarkState;
};
