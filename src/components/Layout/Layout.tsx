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
          <Link component={Nav.Link} to="/">
            Search
          </Link>
          <Link component={Nav.Link} to="/bookmarks">
            Bookmarks
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <main className="mt-5">{children}</main>
  </>
);

export default Layout;
