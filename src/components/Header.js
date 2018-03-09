import React from 'react';
import { Link, Route } from 'react-router-dom';

import RegisterUser from '../containers/RegisterUser';

export default () => {
  const userInfo = JSON.parse(localStorage.getItem('user'));

  return (
    <header className="header-bar">
        <div className="logo-container"><Link to="/"><h1>devlist</h1></Link></div>
        <div className="search-container"> SEARCH BAR...</div>
          {userInfo ? (
            <div className="loggedin-links">
              <p>Hello, {userInfo.username}</p>
              <Link to="/logout"><button>Logout</button></Link>
            </div>
          ) : (
            <div className="loggedout-links">
              <Link to="/register" className="register-link">Register</Link>
              <Link to="/login"><button>Login</button></Link>
            </div>
          )}
      </header>
  )
}