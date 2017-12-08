import React, { Component } from 'react';
import { scaleDown as Menu } from 'react-burger-menu';

class SideBar extends Component {
  constructor() {
    super();

    this.state = {
      showNav : false
    };
  }

  toggleNav(evt) {
    evt.preventDefault();
    this.setState({
      showNav : !this.state.showNav
    });
  }

  render() {
    if(localStorage.username) {
    return(
      <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <p>Categories</p>
          <a id="appliances" className="menu-item" href="/appliances">Appliances</a>
          <a id="computers" className="menu-item" href="/computers">Computers</a>
          <a id="furniture" className="menu-item" href="/furniture">Furniture</a>
          <a id="vehicles" className="menu-item" href="/vehicles">Vehicles</a>
          <br/>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="settings" className="menu-item" href="/settings">Settings</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
    )
    }else{
      return(
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <p>Categories</p>
          <a id="appliances" className="menu-item" href="/appliances">Appliances</a>
          <a id="computers" className="menu-item" href="/computers">Computers</a>
          <a id="furniture" className="menu-item" href="/furniture">Furniture</a>
          <a id="vehicles" className="menu-item" href="/vehicles">Vehicles</a>
          <br/>
          <a id="register" className="menu-item" href="/Register">Sign Up</a>
          <a id="login" className="menu-item" href="/Login">Login</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
      )
    }
  }

}


export default SideBar;
