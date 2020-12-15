import { fork } from 'redux-saga/effects';
import { watchSearchRepositories } from './repositories';

export default function* rootSaga() {
    yield fork(watchSearchRepositories)
}