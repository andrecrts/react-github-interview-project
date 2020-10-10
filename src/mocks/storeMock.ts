import { RootState } from '../types/states';

const storeMock: RootState = {
  repositoryReducer: {
    repositories: [],
    totalCount: 0,
    page: 1,
  },
  bookmarksReducer: {
    bookmarks: [],
  },
};

export default storeMock;
