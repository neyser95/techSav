import React from 'react';

const Navbar = (props) => {
  return (
    <div>
      <nav id="navbar">
        <div id="navbar-logo">
          <p>TechSav</p>
        </div>
        <div id="navbar-links">
          <a className="links" href='/login'> Login </a>
          <a className="links" href='/sign-up'> Signup </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;