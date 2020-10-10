export const FETCH_REPOSITORIES = 'FETCH_REPOSITORIES';
export const FETCH_REPOSITORIES_SUCCESS = 'FETCH_REPOSITORIES_SUCCESS';
export const FETCH_REPOSITORIES_FAILED = 'FETCH_REPOSITORIES_FAILED';

export const fetchRepositoriesAction = (search: string) => ({
  type: FETCH_REPOSITORIES,
  payload: { search },
});

export const fetchRepositorySuccess = (repositories: any) => ({
  type: FETCH_REPOSITORIES_SUCCESS,
  payload: { repositories },
});

export const fetchRepositoryFailed = (error: any) => ({
  type: FETCH_REPOSITORIES_FAILED,
  payload: { error },
});
