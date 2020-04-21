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
        

       <Switch>
         <PrivateRoute exact path='/friends' component = {FriendsForm} />
         <PrivateRoute exact path='/friends' component = {FriendsList} />
         <Route path='/login' component={Login}/>
         <Route path='/' component={Login}/>
       </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
