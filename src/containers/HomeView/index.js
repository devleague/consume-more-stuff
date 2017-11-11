import React, { Component } from 'react';
import ItemList from '../components/itemlist.components.js';
// import { connect } from 'react-redux';
// import { getCards } from '../../actions/cards';

class Home extends Component{
  constructor(props){
    super(props);
  }
}




render(){
  return(
    <div className="home">

      <div className="welcome-message">
        <p>Welcome</p>
      </div>

      <div className="list-view">
      </div>

    </div>
    );
}

export default Home;