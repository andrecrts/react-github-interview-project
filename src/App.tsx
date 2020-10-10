import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
import SearchPage from './pages/SearchPage/SearchPage';
import BookmarksPage from './pages/BookmarksPage/BookmarksPage';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/bookmarks">
              <BookmarksPage />
            </Route>
            <Route path="/">
              <SearchPage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
