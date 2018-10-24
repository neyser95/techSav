import React from 'react';

const LoginPage = (props) => {
  return (
    <div className="form-container">
      <form id="login-form" action="/login">
        <header id="login-form-header"><b>Login</b></header>
        <label> Username: </label>
        <input type="text" placeholder="username"/>
        <label> Password: </label>
        <input type="password" placeholder="password"/>
        <input id="login-form-submit" type="submit" value="Login"/>
      </form>
    </div>
  )
}

export default LoginPage;