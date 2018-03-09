import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const loggedIn = JSON.parse(localStorage.getItem('user'));

  return (
    <nav className="nav-bar">
      <ul>
        <li className="header-title"><h2>Categories</h2></li>
        <li><Link to="/categories/1"><i className="fas fa-rocket fa-fw"></i>Vehicles</Link></li>
        <li><Link to="/categories/2"><i className="fas fa-fw fa-plug"></i>Appliances</Link></li>
        <li><Link to="/categories/3"><i className="fas fa-fw fa-desktop"></i>Computers</Link></li>
        <li><Link to="/categories/4"><i className="fas fa-fw fa-home"></i>Furniture</Link></li>
        
        {
          loggedIn ? [
            <li key="0" className="header-title"><h2>Account</h2></li>,
            <li key="1"><Link to="/new-item"><i className="fas  fa-fw fa-plus-square"></i>Add New Listing</Link></li>,
            <li key="2"><Link to={`users/${loggedIn.id}`}><i className="fas fa-fw fa-bars"></i>My Listings</Link></li>,
            <li key="3"><Link to="/settings"><i className="fas fa-fw fa-cog"></i>Settings</Link></li>
          ]
          : null           
        }
      </ul>
    </nav>
  )
}