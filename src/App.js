import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

// Components
import { Header } from './components/Header';
import { Footer } from './components/Footer'; 

// Pages
import { Error } from './pages/Error';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Bookmarks } from './pages/Bookmarks';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/search' component={Search} />
        <Route path='/bookmarks' component={Bookmarks} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
