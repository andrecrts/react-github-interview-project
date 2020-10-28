import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import sagas from '../sagas'; // TODO: Next step

//  Returns the store instance
// It can  also take initialState argument when provided
const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware(); 
	const store = createStore(
		reducers,
		applyMiddleware(sagaMiddleware)
	)
	sagaMiddleware.run(sagas)
	return store;
};

export default configureStore;
