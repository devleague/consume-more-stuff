import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/user_actions';

class RegisterUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      registered: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const newUser = this.state;
    const history = this.props.history;
    console.log('newUser', newUser);
    this.props.registerUser(newUser, () => {
      history.push('/login');
    });
  }

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="register-user-form">
        <header><h1>Register New User</h1></header>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={this.handleInput}
          />
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={this.handleInput}
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            onChange={this.handleInput}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.newUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerUser: (user, redirectCallback) => {
      dispatch(registerUser(user, redirectCallback));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterUser));