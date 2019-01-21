import React, { Component } from 'react';
import './App.scss';
import MainSearch from './pages/search/main-search';
import { Route, BrowserRouter} from 'react-router-dom';
import  UserRepositories  from './pages/userRepo/user-repositories.js';
import SearchRepo from './pages/searchRepo/search-repo';
import Favorites from './pages/favorites/favorites';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={MainSearch} />
                    <Route path={'/favorites'} component={Favorites}/>
                    <Route path={'/user/:user'} component={UserRepositories}/>
                    <Route path={'/search/:repo'} component={SearchRepo}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
