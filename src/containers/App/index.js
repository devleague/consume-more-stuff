import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';

import { loadItems } from '../../actions/items';

import Header from '../../components/header';

class App extends Component {

  constructor(){
    super();

    this.state = {
      authorized: false
    }
  }

  componentWillMount(){

  }

  componentDidMount(){

    this.props.loadItems();


    //load items, users, etc.
  }

  render() {
    return (
      <div className="App">
      <Header />
       Hello World! Here's where we will render our authorized container and our unauthorized container.
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems: () => {
      dispatch(loadItems())
    }
  }
}

const ConnectedApp = connect(
  null,
  mapDispatchToProps
)(App)

export default ConnectedApp;
