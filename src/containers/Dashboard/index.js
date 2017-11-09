import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemList from '../../components/ItemList';


class Dashboard extends Component {

  constructor(){
    super();

    this.state = {
      authorized: false
    }
    console.log()
  }

  componentWillMount(){

  }

  componentDidMount(){

    // this.props.loadItems();


    //load items, users, etc.
  }

  render() {
    return (
      <div className="App">
{/*        <ItemList />*/}

      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    data : state.items

  }
}

const ConnectedDashboard = connect(
  mapStatetoProps
)(Dashboard)

export default ConnectedDashboard;
