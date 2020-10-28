import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';  
import configureStore from './lib/store';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './lib/pages/Home';
import BookmarksPage from './lib/pages/Bookmarks';
import UserPage from './lib/pages/User';

// Initialize store
const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path="/bookmarks">
						<BookmarksPage />
					</Route>
					<Route path="/user/:user">
						<UserPage />
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</Provider>
	</React.StrictMode>,
  	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
