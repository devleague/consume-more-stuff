import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../../actions/login';
import Logout from '../Logout'
import { Redirect, withRouter, Link} from 'react-router';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
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

  handleSubmit(event){
    event.preventDefault();
    let newUser = {
      username: this.state.username,
      password: this.state.password
    }
      this.props.loginUser(newUser);
  }

  handleAuth(event){
    event.preventDefault();
    console.log('i got clicked');
    if(localStorage.getItem('userId')){
        this.props.history.push('/');
      }
    console.log('nothing should happen');

  }



  render(){
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const redirect = localStorage.getItem('userId');

    if(redirect){
      return ( <Redirect to={from}/>)
    }

    return (
      <div id="login-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.username} placeholder="username" onChange={this.handleChangeUsername.bind(this)}/>
          <input type="password" value={this.state.password} placeholder="password" onChange={this.handleChangePassword.bind(this)}/>
          <input
            type="submit"
            // onClick={()=>(this.props.history.push('/'))}
            className="button"
            value="Login"/>
        </form>
      </div>

    )
  }


}

const mapStatetoProps = (state) => {
  return {
    user : state.loginUser

  }
}

const ConnectedLogin = connect(
  mapStatetoProps,
  {loginUser,logoutUser}
)(Login)

export default withRouter(ConnectedLogin);