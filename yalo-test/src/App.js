import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import {
  Container, Nav, Navbar, NavbarBrand,
  NavItem,
} from '@bootstrap-styled/v4/dist/@bootstrap-styled/v4';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import logo from './img/yalochat.png';
import GitHubUsers from './pages/GitHubUsers';
import Bookmarks from './pages/Bookmarks';
import store from './store';

const AppLogo = styled.img`
   height: 80px;
`;

const initialState = {
  isOpen: false,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Navbar color="faded" light toggleable="lg">
              <Container>
                <div className="d-flex justify-content-between">
                  <NavbarBrand><AppLogo src={logo} alt="logo" /></NavbarBrand>
                </div>
                <Nav navbar className="mr-auto">
                  <NavItem>
                    <Link to="/github">GitHub Users</Link>
                  </NavItem>
                </Nav>
              </Container>
            </Navbar>
            <div className="d-inline-block w-100">
              <Route exact path="/" render={() => <h3>Selecciona una opción</h3>} />
              <Route path="/github" component={GitHubUsers} />
            </div>
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
