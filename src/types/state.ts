import { RepositoryType } from './repository';

export type RepositoryState = {
  repositories: RepositoryType[];
  totalCount: number;
};

export type BookmarkState = {
  bookmarks: [];
};

export type RootState = {
  repositoryReducer: RepositoryState;
  bookmarksReducer: BookmarkState;
};
