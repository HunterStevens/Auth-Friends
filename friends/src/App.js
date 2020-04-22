import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import FriendsForm from './components/FriendsForm';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/ProtectedRoute'
import { Login } from './components/Login';

function App() {

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friend List</Link>
          </li>
          <li>
            <Link to="/form">New Friend</Link>
          </li>
        </ul>

       <Switch>
         <PrivateRoute exact path='/friends' component = {FriendsList} />
         <PrivateRoute exact path='/form' component = {FriendsForm} />
         <Route exact path='/login' component={Login}/>
       </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
