import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadItems } from '../../actions/items.actions';

import ItemList from '../../components/itemlist.components';
// import UnAuthItem from '../UnAuthItemView/';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [] // initial state
    }
  }


  componentDidMount(){
    this.props.loadItems()
  }


  render() {
    console.log(this.props.loadItems, "props.loadItems");
    console.log(this.props.items, "props.items");
    return (

      <div className="App">
        Hello World!
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    items: state.itemList // makes it this.props.items
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadItems: () => {
      console.log('Dispatch the action');
      dispatch(loadItems());
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;
