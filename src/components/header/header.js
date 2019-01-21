import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import logo from '../../assets/img/github-logo.svg';

class Header extends Component {

    state = {
        showFavorites: false,
    };    

    render() {
        return (
            <header className="Header">
                <nav>
                    <li>
                        <img src={logo} alt="logo" width="24px"/>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to={"/"}
                            className="link"
                            activeClassName="active"
                        >
                            Home
                        </NavLink>
                    </li>

                    {/* { this.state.showFavorites && */}
                        <li>
                            <NavLink
                                exact
                                to={"/favorites"}
                                className="link"
                                activeClassName="active"
                            >
                                Favorites
                            </NavLink>
                        </li>
                    {/* } */}
                </nav>
            </header>
        );
    }
}

export default Header;
