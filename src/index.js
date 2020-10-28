import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';  
import configureStore from './lib/store';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SearchPage from './lib/pages/Search';
import BookmarksPage from './lib/pages/Bookmarks';
import UserPage from './lib/pages/User';

// Initialize store
const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<div className="app">
					<Switch>
						<Route path="/bookmarks">
							<BookmarksPage />
						</Route>
						<Route path="/user/:username">
							<UserPage />
						</Route>
						<Route path="/">
							<SearchPage />
						</Route>
					</Switch>
					<div className="copy small-text p-t-10">
						By <a href="https://github.com/danioso" target="_blank" rel="noreferrer">Daniel Osorio</a>
					</div>
				</div>
			</Router>
		</Provider>
	</React.StrictMode>,
  	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
