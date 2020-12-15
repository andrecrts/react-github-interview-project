import { Provider } from 'react-redux';  
import configureStore from './store';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SearchPage from './pages/Search';
import BookmarksPage from './pages/Bookmarks';
import UserPage from './pages/User';
import './App.css';

const store = configureStore();

function App() {
  return (
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
        </div>
      </Router>
    </Provider>
  );
}

export default App;
