import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import LoginPage from './Login/LoginPage';
import HomePage from './Homepage/HomePage';
import SignupPage from './Signup/Signup';

class App extends Component {
  constructor(props) {
    super(props),
      this.state = {
        blogs: []
      }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div id='body'>
          <Switch>
            <Route exact path='/' render={props => <HomePage {...props} />} />
            <Route path='/login' render={props => <LoginPage {...props} />} />
            <Route path='/signup' render={props => <SignupPage {...props} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;