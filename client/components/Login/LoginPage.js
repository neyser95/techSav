import React from 'react';

const LoginPage = (props) => {
  return (
    <div className="form-container">
      <form id="login-form" action="/login">
        <header id="login-form-header"><b>Login</b></header>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
      </form>
    </div>
  )
}

export default LoginPage;