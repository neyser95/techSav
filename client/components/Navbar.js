import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div>
      <nav id="navbar">
        <div id="navbar-logo">
          <NavLink className='links' to='/'> <p>TechSav</p> </NavLink>
        </div>
        <div id="navbar-links">
          <NavLink className='links' to='/login'> Login </NavLink>
          <NavLink className='links' to='/signup'> Sign Up </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;