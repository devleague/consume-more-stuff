import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { Switch, Route, Link, withRouter} from 'react-router-dom';
import { Redirect } from 'react-router'
import { loadItems } from '../../actions/items';
import Login from '../Login';
import AllItemView from '../AllItemView';
import NewItemForm from '../NewItemForm';

class App extends Component {

  constructor(){
    super();

    if(localStorage.getItem('userId')){
      this.state = { auth: true, redirect: true };
    }else{
      this.state = { auth: false, redirect: false };
    }

  }



  componentWillMount(){

  }

  componentDidMount(){

    this.props.loadItems();
    //load items, users, etc.
  }



  render() {
    const {redirect} = this.state;
    
    if(redirect) {
      return <NewItemForm />;
    }
    return <Login />;
  }
}

const mapStatetoProps = (state) => {
  return {
    data : state.items,
    auth : state.loginUser

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
  mapStatetoProps,
  mapDispatchToProps
)(App)

export default withRouter(ConnectedApp);
