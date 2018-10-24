import React from 'react';
import { Redirect } from 'react-router-dom';

const SignupPage = (props) => {
  console.log('This is reaching')
  console.log(props);
  if (props.redirectMe) {
    console.log("Hello!!");
    return (
      <Redirect to={props.redirectUrl} />
    );
  }
  return (
    <div className="form-container">
      <form id="signup-form" onSubmit={(e) => { props.handleSignup(e); }}>
        <header id="signup-form-header"><b>Sign Up</b></header>
        <label> Username: </label>
        <input type="text" name="username" placeholder="username" />
        <label> Password: </label>
        <input type="password" name="password" placeholder="password" />
        <input id="signup-form-submit" type="submit" value="Sign Up" />
      </form>
    </div>
  )
}

export default SignupPage;