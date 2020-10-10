import * as React from 'react';
import {
  Button, Col, Nav, Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import yalo from '../../assets/img/yalo-logo.svg';

export interface LayoutProps { }

const CustomLink = styled(Button)`
  color: white;
  :hover {
    color: white;
  }
`;
const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand>
          <img alt="Yalochat" src={yalo} />
        </Navbar.Brand>
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
    </header>
    <main className="mt-5">
      {children}
    </main>
    <footer>
      <Col>
        Create with &hearts; by Carlos Barranco
      </Col>
      <Col xs="auto">
        <CustomLink className="mr-2" href="https://github.com/cabaag" target="_blank" variant="link">
          Github
        </CustomLink>
        <CustomLink className="mr-2" href="https://www.linkedin.com/in/cabaag/" target="_blank" variant="link">
          LinkedIn
        </CustomLink>
      </Col>
    </footer>
  </>
);

export default Layout;
