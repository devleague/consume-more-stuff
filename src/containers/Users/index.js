import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadUsers,editUser } from '../../actions/users';
import UserList from '../../components/UserList.js';
import filterUserStatus from '../../lib/filterUserStatus';
import filterUser from '../../lib/filterUser';
import SingleUser from '../../components/SingleUser.js';


class User extends Component {
  constructor(){
    super();

    this.state = {
      user: '',
      username: '',
      password: '',
      email: '',
      auth: true,
      edit: false
    }
  }


  handleChangeUsername(event){
    this.setState({
      username: event.target.value
    })
  }

  handleChangePassword(event){
    this.setState({
      password: event.target.value
    })
  }

  handleChangeEmail(event){
    this.setState({
      email: event.target.value
    })
  }

  editNow(user,e){
    this.setState({user: user});
    this.setState({edit: true});
    if(this.state.edit){
      let user = {
      id: this.state.user[0].id,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      userstatus: (this.state.email ? 'active' : 'inactive')
    }
    console.log(user);
    this.props.editUser(user);
    this.setState({user: null});
    this.setState({edit: false});
    }
  }

  componentWillMount(){
    this.props.loadUsers();
  }

  loadUser(id,e){
    let users = this.props.users;
    let user = filterUser(users,id)
    this.setState({user: user});
  }
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
          handleChangeUsername={this.handleChangeUsername.bind(this)}
          handleChangePassword={this.handleChangePassword.bind(this)}
          handleChangeEmail={this.handleChangeEmail.bind(this)}
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