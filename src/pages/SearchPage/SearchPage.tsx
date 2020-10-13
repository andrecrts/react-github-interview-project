import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutSearch from '../../components/LayoutSearch/LayoutSearch';
import RepositorySearchPage from '../RepositorySearchPage/RepositorySearchPage';
import UserSearchPage from '../UserSearchPage/UserSearchPage';

export interface MainPageProps { }

const SearchPage: React.FC<MainPageProps> = () => (
  <Router>
    <LayoutSearch>
      <Switch>
        <Route exact path="/user">
          <UserSearchPage />
        </Route>
        <Route path="/">
          <RepositorySearchPage />
        </Route>
      </Switch>
    </LayoutSearch>
  </Router>
);

export default SearchPage;
