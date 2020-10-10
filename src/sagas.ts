import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_REPOSITORIES, FETCH_REPOSITORIES_FAILED, FETCH_REPOSITORIES_SUCCESS } from './actions/repository';
import github from './services/github';

function* fetchUser(action: any) {
  const {
    payload: { search },
  } = action;

  try {
    const response = yield call(github.search, search);
    yield put({ type: FETCH_REPOSITORIES_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: FETCH_REPOSITORIES_FAILED, error: e.message });
  }
}

function* mySaga() {
  yield takeLatest(FETCH_REPOSITORIES, fetchUser);
}

export default mySaga;
