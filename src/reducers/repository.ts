import { FETCH_REPOSITORIES, FETCH_REPOSITORIES_SUCCESS } from '../actions/repository';
import github from '../services/github';
import { RepositoryState } from '../types/state';

const initialState: RepositoryState = {
  repositories: [],
  totalCount: 0,
};

const repositoryReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_REPOSITORIES:
      console.log(payload);
      github.search(payload.search);
      return { ...state };
    case FETCH_REPOSITORIES_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const { items, totalCount } = payload;
      console.log(items);

      return {
        ...state,
        repositories: items,
        totalCount,
      };
    default:
      return state;
  }
};

export default repositoryReducer;
