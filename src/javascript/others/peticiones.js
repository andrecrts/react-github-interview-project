import axios from 'axios';

export const githubURL = 'https://api.github.com/';
export const urlServer = 'http://68.183.203.255:5005/';
// export const urlServer = 'http://localhost:4000/';

export async function getSearchRepos(data) {
  const endpoint = 'search/repositories?q=' + data;
  const url = githubURL + endpoint;
  try {
    const respose = await axios.get(url);
    return respose;
  } catch (error) {
    return error;
  }
}

export async function getListReposUser(data) {
  const endpoint = `users/${data}/repos?per_page=250`;
  const url = githubURL + endpoint;
  try {
    const respose = await axios.get(url);
    return respose;
  } catch (error) {
    return error;
  }
}

// ---------------------------------------Bookmarks------------------------------------

export async function getAllBookmarks() {
  const endpoint = 'api/bookmarks/all';
  const url = urlServer + endpoint;
  try {
    const respose = await axios.get(url);
    return respose;
  } catch (error) {
    return error;
  }
}

export async function insertBookmark(data) {
  const endpoint = 'api/bookmarks/new';
  const url = urlServer + endpoint;
  try {
    const respose = await axios.post(url, data);
    return respose;
  } catch (error) {
    return error;
  }
}

export async function deleteBookmark(id) {
  const endpoint = 'api/bookmarks/delete/';
  const url = urlServer + endpoint + id;
  try {
    const respose = await axios.delete(url);
    return respose;
  } catch (error) {
    return error;
  }
}
