import { getUserRepos, search as searchAPI } from '../git-api';

const fetchUserRepos = (username: string): Promise<any> => getUserRepos(username);

const search = (query: string, page = 1): Promise<any> => searchAPI(query, page);

const github = {
  fetchUserRepos,
  search,
};

export default github;
