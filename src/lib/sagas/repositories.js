import { put, call, takeLatest } from 'redux-saga/effects';
import { search } from '../api';
import * as types from '../actions/actionTypes';

// Making calls to the API
function* searchRepositoriesSaga({ payload }) {
	try {
		const repositories = yield call(search, payload);
		yield put({ type: types.SEARCH_REPOSITORIES_SUCCESS, repositories });
	} catch (error) {
		yield put({ type: types.SEARCH_REPOSITORIES_ERROR, error });
	}
}

// Watches for SEARCH_REPOSITORIES_REQUEST
export function* watchSearchRepositories() {
	yield takeLatest(types.SEARCH_REPOSITORIES_REQUEST, searchRepositoriesSaga);
}
