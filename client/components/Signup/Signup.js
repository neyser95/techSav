import React from 'react';

const SignupPage = (props) => {
  return (
    <div className="form-container">
      <form id="signup-form" action="/login">
        <header id="signup-form-header"><b>Sign Up</b></header>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
      </form>
    </div>
  )
}

export default SignupPage;