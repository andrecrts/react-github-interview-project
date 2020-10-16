import { UPDATE_SEARCH_LIST, DELETE_SEARCH_LIST } from 'Types';
import {
  getSearchRepos,
  getListReposUser,
  getAllBookmarks
} from 'Others/peticiones';

// eslint-disable-next-line no-unused-vars
const testData = [
  {
    id: 728246,
    name: 'gotris',
    owner: {
      login: 'nsf',
      id: 12567
    },
    html_url: 'https://github.com/nsf/gotris',
    description: 'A classic tetris game written in Go programming language'
  }
];

export const updateSearchList = (
  searchParam,
  loadingMethod
) => async dispatch => {
  loadingMethod(true);
  const response = await getSearchRepos(searchParam);
  loadingMethod(false);
  const { items } = response.data;
  dispatch({
    type: UPDATE_SEARCH_LIST,
    payload: items
  });
};

export const updateUserList = (
  searchParam,
  loadingMethod
) => async dispatch => {
  loadingMethod(true);
  const response = await getListReposUser(searchParam);
  loadingMethod(false);
  const { data } = response;
  dispatch({
    type: UPDATE_SEARCH_LIST,
    payload: data
  });
};

export const getBookmarksList = loadingMethod => async dispatch => {
  loadingMethod(true);
  const response = await getAllBookmarks();
  loadingMethod(false);
  const { data } = response;
  dispatch({
    type: UPDATE_SEARCH_LIST,
    payload: data
  });
};

export const cleanSearchList = () => dispatch => {
  console.log('entro cleanSearchList ');

  dispatch({
    type: DELETE_SEARCH_LIST
  });
};
