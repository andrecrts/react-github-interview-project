import React, {Component} from 'react';
import logo from './img/yalochat.png';
import styled from 'styled-components';
import './App.css';
import {
    Container, Nav, Navbar, NavbarBrand,
    NavItem, NavLink
} from '@bootstrap-styled/v4/dist/@bootstrap-styled/v4';

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

    showAler() {
        alert('wii');
    }

    render() {
        console.log(this.state);
        return (
            <Navbar color="faded" light toggleable="lg">
                <Container>
                    <div className="d-flex justify-content-between">
                        <NavbarBrand to="javascript:;"><AppLogo src={logo} alt="logo"/></NavbarBrand>
                    </div>
                    <Nav navbar className="mr-auto">
                        <NavItem>
                            <NavLink>GitHub Users</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Bookmarks</NavLink>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default App;

// {/*<div className="App">*/
// }
// {/*<header className="App-header">*/
// }
// {/*<img src={logo} className="App-logo" alt="logo"/>*/
// }
// {/*<p>*/
// }
// {/*Edit <code>src/App.js</code> and save to reload.*/
// }
// {/*</p>*/
// }
//
// {/*<a*/
// }
// {/*className="App-link"*/
// }
// {/*href="https://reactjs.org"*/
// }
// {/*target="_blank"*/
// }
// {/*rel="noopener noreferrer"*/
// }
// {/*>*/
// }
// {/*Learn React*/
// }
// {/*</a>*/
// }
// {/*</header>*/
// }
// {/*</div>*/
// }
