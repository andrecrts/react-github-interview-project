import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComNav from './components/ComNav';
import ComFooter from './components/ComFooter';
import ComHeader from './components/ComHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <ComNav/>
        <header className="App-header">
        <ComHeader/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            App Git Search
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <ComFooter/>
      </div>
    );
  }
}

export default App;
