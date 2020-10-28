import { fork } from 'redux-saga/effects';
import { watchSearchRepositories } from "./repositories";

// Register and export watcher sagas as a single generator
export default function* rootSaga() {
	yield fork(watchSearchRepositories)
}
