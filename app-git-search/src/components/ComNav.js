import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import logo from './../logoNav.svg';

const ComNav = () => (
    <div>
        <Navbar fixed="top" bg="dark" variant="dark" expand="lg" >
            <img src={logo} className="App-Navlogo" alt="logo" />
            <Navbar.Brand href="#home">App Git Search</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Git</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="List repositories" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Name</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">User Name</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Bookmark repositories</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </div>
);

export default ComNav;