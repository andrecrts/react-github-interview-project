/* eslint-disable camelcase */
import { FETCH_REPOSITORIES, FETCH_REPOSITORIES_SUCCESS } from '../actions/repository';
import github from '../services/github';
import { RepositoryState } from '../types/states';

const initialState: RepositoryState = {
  repositories: [],
  totalCount: 0,
  page: 1,
};

const repositoryReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_REPOSITORIES:
      github.search(payload.search);
      return { ...state, page: payload.page };
    case FETCH_REPOSITORIES_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const { items, total_count } = payload;
      return {
        ...state,
        repositories: items,
        totalCount: total_count,
      };
    default:
      return state;
  }
};

export default repositoryReducer;
