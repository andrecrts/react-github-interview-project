// ---Dependencys
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// ---Pages
import NavBar from 'Cont/NavBarCont';
import HomePage from 'Pages/HomePage';
import SearchPage from 'Pages/SearchPage';
import BookmarksPage from 'Pages/BookmarksPage';
import Error404Page from 'Pages/Error404Page';

function AppContainer() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/bookmarks" component={BookmarksPage} />
        <Route exact path="*" component={Error404Page} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppContainer;
