import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Yalo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Search
          </Nav.Link>
          <Nav.Link as={Link} to="/bookmarks">
            Bookmarks
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <main className="mt-5">{children}</main>
  </>
);

export default Layout;
