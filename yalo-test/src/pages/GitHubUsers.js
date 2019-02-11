import React, { Component } from 'react';
import {
  Container, Nav, NavItem, NavLink,
} from '@bootstrap-styled/v4/dist/@bootstrap-styled/v4';
import {
  Route, BrowserRouter as Router,
} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Users from './github-api/UsersSearch';
import Repos from './github-api/ReposSearch';


class GitHubUsers extends Component {
  render() {
    const { match } = this.props;
    return (
      <Router>
        <Container className="w-100">
          <Nav tabs>
            <NavItem>
              <LinkContainer to={`${match.url}/usuarios`}>
                <NavLink>
                  Usuarios
                </NavLink>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to={`${match.url}/repos`}>
                <NavLink>
                  Repos
                </NavLink>
              </LinkContainer>
            </NavItem>
          </Nav>
          <div className="w-100 d-inline-block">
            <Route exact path={`${match.url}`} render={() => <h3>Selecciona una opción</h3>} />
            <Route exact path={`${match.url}/usuarios`} component={Users} />
            <Route path={`${match.url}/repos`} component={Repos} />
          </div>
        </Container>
      </Router>
    );
  }
}

export default GitHubUsers;
