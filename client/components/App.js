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
        isLoggin: false,
        redirectMe: false,
        redirectUrl: '/',
        posts: []
      }
  }

  handleSignup(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(e.target, data);

    fetch('/app/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        game: "One"
      })
    })
    .then(res => {
      console.log('This is th response:', res);
      this.setState({ redirectMe: !this.state.redirectMe }, () => {
        console.log(this.state);
      });
    })
    .catch(err => { 'There was an error' });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div id='body'>
          <Switch>  
            <Route exact path='/' render={props => <HomePage {...props} />} />
            <Route path='/login' render={props => <LoginPage {...props} />} />
            <Route path='/signup' render={props => <SignupPage {...props} handleSignup={this.handleSignup} redirectMe={this.state.redirectMe} redirectUrl={this.state.redirectUrl} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;