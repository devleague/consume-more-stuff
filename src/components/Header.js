/* 
CJ notes: 
- divs are in place of <Link to="/" /> for testing purposes    
- pass in a prop that shows if auth = true || false, then show xyz
*/


import React from 'react';
import { Link, Route } from 'react-router-dom';

import RegisterUser from '../containers/RegisterUser';

const Header = () => {

  const userInfo = JSON.parse(localStorage.getItem('user'));

  if (!userInfo) {
    return (
      <div className="header-bar">
      <div className="logo">LOGO</div>

      <div className="unauth-header-view"> SEARCH BAR...
        <button><Link to="/login">Login</Link></button>
        <button><Link to="/register">Register</Link></button>
      </div>
    </div>
    )
  } else {
    return (
    <div className="header-bar">
    <div className="logo">LOGO</div>

    <div className="auth-header-view"> SEARCH BAR...</div>

        <div className="welcome-auth-user">Hello, {userInfo.username}!
        <button><Link to="/logout">Logout</Link></button>
      </div>
    </div>
    )
  }
}

export default Header