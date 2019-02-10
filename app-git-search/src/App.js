import React, { Component } from 'react';
import './App.css';
import ComAppGit from './components/ComAppGit';
import ComFooter from './components/ComFooter';

class App extends Component {
  render() {
    return (
      <div className="App">    
        <header className="App-header">
          <ComAppGit/>
        </header>
        <ComFooter/>
      </div>
    );
  }
}

export default App;
