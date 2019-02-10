import React, { Component } from 'react';
import logo from './img/yalochat.png';
import styled from 'styled-components';
import './App.css';
import {
  Container, Nav, Navbar, NavbarBrand,
  NavItem, NavLink,
} from '@bootstrap-styled/v4/dist/@bootstrap-styled/v4';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import GitHubUsers from './pages/GitHubUsers';
import Bookmarks from './pages/Bookmarks';

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
      <Router>
        <Container>
          <Navbar color="faded" light toggleable="lg">
            <Container>
              <div className="d-flex justify-content-between">
                <NavbarBrand><AppLogo src={logo} alt="logo" /></NavbarBrand>
              </div>
              <Nav navbar className="mr-auto">
                <NavItem>
                  <Link to="/">GitHub Users</Link>
                </NavItem>
                <NavItem>
                  <Link to="/bookmarks">Bookmarks</Link>
                </NavItem>
              </Nav>
            </Container>
          </Navbar>
          <div className="bg-warning d-inline-block w-100">
            <Route exact path="/" component={GitHubUsers} />
            <Route path="/bookmarks" component={Bookmarks} />
          </div>
        </Container>
      </Router>
    );
  }
}

export default App;
