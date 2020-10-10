import { getUserRepos, search as searchAPI } from '../git-api';

const fetchUserRepos = (username: string): Promise<any> => getUserRepos(username);

const search = (query: string): Promise<any> => searchAPI(query);

const github = {
  fetchUserRepos,
  search,
};

export default github;
