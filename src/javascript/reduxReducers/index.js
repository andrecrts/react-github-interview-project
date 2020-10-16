import { combineReducers } from 'redux';
import loadingReducer from 'Reducers/loading';
import searchReducer from 'Reducers/search';

export default combineReducers({
  loadingReducer,
  searchReducer
});
