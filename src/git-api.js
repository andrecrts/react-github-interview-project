import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const getUserRepos = (username) => {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  return axios.get(url).then((response) => response.data);
};

export const search = (query, page) => {
  const url = `${BASE_URL}/search/repositories?q=${query}&p=${page}`;
  return axios.get(url).then((response) => response.data);
};
