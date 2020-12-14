import { Provider } from 'react-redux';  
import configureStore from './store';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import SearchPage from './pages/Search';
// import BookmarksPage from './pages/Bookmarks';
// import UserPage from './pages/User';
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <div className="app">
          <Switch>
            
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
