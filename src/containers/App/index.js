import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadItems } from '../../actions/items.actions';
import { loadConditions } from '../../actions/conditions.actions';
import { loadUsers } from '../../actions/users.actions';
import { loadStatuses } from '../../actions/statuses.actions';
import { loadCategories } from '../../actions/categories.actions';

import ItemList from '../../components/itemlist.components';
import SingleItemView from '../SingleItemView';

import UnAuthItem from '../UnAuthItemView/';
import NewItem from '../NewItem/';
import Nav from '../../components/nav.components';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [] // initial state
    };
  }

  componentDidMount(){
    this.props.loadItems();
    this.props.loadCategories();
    this.props.loadConditions();
    this.props.loadUsers();
    this.props.loadStatuses();

  }

  render() {
    return (
      <div className="App">
        <Nav />
        <NewItem />
        <ItemList
           items={this.props.items}/>
        <SingleItemView
          id='1' />
        Hello World!
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.itemList, // makes it this.props.items
    categories: state.categoryList,
    conditions: state.conditionlist,
    statuses: state.statusList,
    users: state.userList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems: () => {
      console.log('Dispatch the action');
      dispatch(loadItems());
    },
    loadCategories: () => {
      dispatch(loadCategories());
    },
    loadConditions: () => {
      dispatch(loadConditions());
    },
    loadStatuses: () => {
      dispatch(loadStatuses());
    },
    loadUsers: () => {
      dispatch(loadUsers());
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;
