import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../actions/auth.actions';
import { loadUsers } from '../../actions/users.actions';

class Login extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      username : '',
      password : '',
      redirect : false // set initial state to false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }


  handleSubmit(evt) {
    //on success do this:
    evt.preventDefault();
    let loginCreds = {
      username : this.state.username,
      password : this.state.password
    }
    console.log("loginCreds", loginCreds);
    this.props.loginUser(loginCreds);
    this.setState(
    {
      username : '',
      password : '',
      redirect : true
    });

  }

  handleUsernameInput(evt) {
    this.setState(
    {
      username : evt.target.value
    })
  }

  handlePasswordInput(evt) {
    this.setState(
    {
      password : evt.target.value
    })
  }

  render(){
    if (this.state.redirect) {
      return <Redirect to="/"/>
    }
    return(
      <div>
        <h4>Login</h4>
        <form onSubmit={this.handleSubmit.bind(this)}>

          <div>
          <input type="text" placeholder="username" defaultValue={this.state.username} onChange={this.handleUsernameInput} />
          </div>

          <div>
          <input type="password" placeholder="password" defaultValue={this.state.password} onChange={this.handlePasswordInput} />
          </div>

          <button
            type="submit"
            className="login-button"
            onClick={this.handleSubmit}>Login
          </button>

        </form>

      </div>
    );
  }
}

// maps store state to local props
const mapStateToProps = (state) => {
  return {
    users : state.userList
  };
};

//maps store dispatch to local props
const mapDispatchToProps = (dispatch) => {
  return{
    loginUser: (loginCreds) => {
      dispatch(loginUser(loginCreds));
    },

    loadUsers: () => {
      dispatch(loadUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);