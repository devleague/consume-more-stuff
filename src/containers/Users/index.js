import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadUsers,editUser } from '../../actions/users';
import UserList from '../../components/UserList.js';
import filterUserStatus from '../../lib/filterUserStatus';
import filterUser from '../../lib/filterUser';
import editHelper from '../../lib/editUser';
import SingleUser from '../../components/SingleUser.js';


class User extends Component {
  constructor(){
    super();

    this.state = {
      user: '',
      auth: true,
      edit: false
    }
  }

  handleChange(e){ editHelper(e); }

  editNow(user,e){
    let editedUser = editHelper(e);
    this.setState({user: user, edit: true});
    if(this.state.edit){
      editedUser.id = user[0].id;
      this.props.editUser(editedUser);
      this.setState({user: null, edit: false});
    }
  }

  componentWillMount(){ this.props.loadUsers(); }
  loadUser(id,e){ this.setState( {user: filterUser(this.props.users,id)} ); }

  backToUsers(e){
    e.preventDefault();
    this.setState({user: null});
  }

  render(){
    const user = this.state.user;
    return(
      <div>
      {user ? 
        <SingleUser
          editNow={this.editNow.bind(this)}
          edit={this.state.edit}
          auth={this.state.auth}
          handleChange={this.handleChange.bind(this)}
          backToUsers={this.backToUsers.bind(this)}
          user={this.state.user} />
        :
        <UserList 
          loadUser={this.loadUser.bind(this)}
          users={this.props.users}
          activeUsers={this.props.activeUsers}
          inactiveUsers={this.props.inactiveUsers}/>
        }

      </div>

    )
  }
}


const mapStateToProps = (state) => {
  return{
    users: state.users,
    activeUsers: filterUserStatus(state.users,'active'),
    inactiveUsers: filterUserStatus(state.users,'inactive')
  }
}

const ConnectedUser = connect(
  mapStateToProps,
  {loadUsers,editUser}
)(User)

export default ConnectedUser;