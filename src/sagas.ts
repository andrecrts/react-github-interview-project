import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_REPOSITORIES,
  FETCH_REPOSITORIES_BY_USER,
  FETCH_REPOSITORIES_FAILED,
  FETCH_REPOSITORIES_SUCCESS,
} from './actions/repository';
import github from './services/github';

function* fetchRepositories(action: any) {
  const {
    payload: { search, page },
  } = action;

  try {
    const response = yield call(github.search, search, page);
    yield put({ type: FETCH_REPOSITORIES_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: FETCH_REPOSITORIES_FAILED, error: e.message });
  }
}

function* fetchRepositoriesByUser(action: any) {
  const {
    payload: { search },
  } = action;

  try {
    const response = yield call(github.fetchUserRepos, search);
    yield put({ type: FETCH_REPOSITORIES_SUCCESS, payload: { items: response, total_count: 0 } });
  } catch (e) {
    yield put({ type: FETCH_REPOSITORIES_FAILED, error: e.message });
  }
}

function* mySaga() {
  yield takeLatest(FETCH_REPOSITORIES, fetchRepositories);
  yield takeLatest(FETCH_REPOSITORIES_BY_USER, fetchRepositoriesByUser);
}

export default mySaga;
