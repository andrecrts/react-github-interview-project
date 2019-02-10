import React, { Component } from 'react';
import {
  Container, Nav, NavItem,
} from '@bootstrap-styled/v4/dist/@bootstrap-styled/v4';
import {
  Link, Route, BrowserRouter as Router,
} from 'react-router-dom';
import Users from './github-api/UsersSearch';
import Repos from './github-api/ReposSearch';

class GitHubUsers extends Component {
  render() {
    return (
      <Router>
        <Container className="w-100">
          <div className="w-25 d-inline-block">
            <Nav navbar className="mr-auto">
              <NavItem>
                <Link to="/">Usuarios</Link>
              </NavItem>
              <NavItem>
                <Link to="/repos">Repos</Link>
              </NavItem>
            </Nav>
          </div>
          <div className="w-75 bg-info d-inline-block">
            <div className="d-inline-block w-100">
              <Route exact path="/" component={Users} />
              <Route path="/repos" component={Repos} />
            </div>
          </div>
        </Container>
      </Router>
    );
  }
}

export default GitHubUsers;
