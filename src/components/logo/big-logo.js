import React, { Component } from 'react';
import './big-logo.scss';
import logo from '../../assets/img/github-logo.svg';

class BigLogo extends Component {
    render() {
        return (
            <div className="BigLogo">
                <img src={logo} alt="Github big logo"/>
            </div>
        )
    }
}


export default BigLogo;