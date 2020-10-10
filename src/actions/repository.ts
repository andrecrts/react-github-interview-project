import { RepositoryType } from '../types/repository';

export const FETCH_REPOSITORIES = 'FETCH_REPOSITORIES';
export const FETCH_REPOSITORIES_SUCCESS = 'FETCH_REPOSITORIES_SUCCESS';
export const FETCH_REPOSITORIES_FAILED = 'FETCH_REPOSITORIES_FAILED';

export const fetchRepositoriesAction = (search: string, page = 1) => ({
  type: FETCH_REPOSITORIES,
  payload: { search, page },
});

export const setRepositories = (repositories: { items: RepositoryType[]; totalCount: number }) => ({
  type: FETCH_REPOSITORIES_SUCCESS,
  payload: { repositories },
});

export const fetchRepositoryFailed = (error: any) => ({
  type: FETCH_REPOSITORIES_FAILED,
  payload: { error },
});
