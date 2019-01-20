import React, { Component } from 'react';
import './App.scss';
import SearchByName from './pages/search/search-by-name';
import { Route, BrowserRouter} from 'react-router-dom';
import  UserRepositories  from './pages/userRepo/user-repositories.js';
import SearchRepo from './pages/searchRepo/search-repo';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={SearchByName} />
                    <Route path={'/user/:user'} component={UserRepositories}/>
                    <Route path={'/search/:repo'} component={SearchRepo}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
