import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <div id='navbar'>
      <h3> This is the nav bar</h3>
      <Link to='/register'>
        <div className='register-button'>
        <button id='register'>Register</button>
        </div>
      </Link>

      <button id='login'>Login</button>
    </div>
  );
}

export default Nav;