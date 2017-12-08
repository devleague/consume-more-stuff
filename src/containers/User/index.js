import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSingleUser } from '../../actions/users.actions';
import { loadItems } from '../../actions/items.actions';
import UserItem from '../../components/user.components';
import NewItem from '../NewItem/';

class User extends Component {
  componentDidMount() {
  // if do show/hide in here for authentication can also include redirect link to login
    if(this.props.match && this.props.match.params && this.props.match.params.id) {
      let id = this.props.match.params.id;
      this.props.loadSingleUser(parseInt(id, 10));
    }
  }

  render() {
    if( this.props.match && localStorage.userId === this.props.match.params.id ){
      return(
        <div className="user-view">
          <div id="user-welcome">
            Hello, { localStorage.username }!
          </div>

          <NewItem 
            userId={this.props.match.params.id} />

          <UserItem singleUser={this.props.singleUser} />
        </div>
      );

    } else {
      return(
        <div>Access Denied</div>
      );
    }
  }
}

// sets store state on local props
const mapStateToProps = state => {
  return {
    singleUser : state.singleUser,
    items : state.itemList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleUser: (id) => {
      dispatch(loadSingleUser(id));
    },
    loadItems: () => {
      dispatch(loadItems());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);