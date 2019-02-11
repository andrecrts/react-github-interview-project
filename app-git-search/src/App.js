import React, { Component } from 'react';
import './App.css';
import ComAppGit from './components/ComAppGit';
import ComFooter from './components/ComFooter';
import ComSearch1 from './components/ComSearch1';
import ComSearch2 from './components/ComSearch2';
import ComSearch3 from './components/ComSearch3';


class App extends Component {
  
  render() {
    return (
      <div className="App">    
        <header className="App-header">
          <ComAppGit/>
          <ComSearch1/>
          <ComSearch2/>
          <ComSearch3/>
        </header>
        
        <ComFooter/>
      </div>
    );
  }
}

export default App;
