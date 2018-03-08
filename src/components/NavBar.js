import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  
  return (
    <div className="nav-bar">
      <ul>
        <li><Link to="/">Home</Link></li>
        {/* Auth view */}
        <div className="auth-nav-bar-view">
          {/* <li><Link to="/messages">Messages</Link></li> */}
          <li><Link to="/settings">Settings</Link></li>
        </div>
        {/* UnAuth view */}
        <div className="unauth-nav-bar-view"> 
          <li><Link to="/vehicles">Vehicles</Link></li>
          <li><Link to="/appliances">Appliances</Link></li>
          <li><Link to="/computers">Computers</Link></li>
          <li><Link to="/furniture">Furniture</Link></li>
        </div>
      </ul>
    </div>
  )
}
export default Nav