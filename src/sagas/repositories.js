import { put, call, takeLatest } from 'redux-saga/effects';
import { search } from '../server';
import * as types from '../actions/types';

function* searchRepositories({ payload }) {
	try {
		const repositories = yield call(search, payload);
		yield put({ type: types.SEARCH_SUCCESS, repositories });
	} catch (error) {
		yield put({ type: types.SEARCH_ERROR, error });
	}
}

export function* watchSearchRepositories() {
	yield takeLatest(types.SEARCH_REQUEST, searchRepositories);
}