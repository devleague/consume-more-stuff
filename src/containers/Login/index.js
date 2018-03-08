import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../actions/user_actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    const history = this.props.history;
    this.props.loginUser(user, (response) => {
      localStorage.setItem('user', JSON.stringify(response));
      history.push(`/users/${response.id}`);
    });
  }

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="login-form">
        <header><h1>Login</h1></header>
        <form onSubmit={this.handleSubmit}>
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
    user: state.users.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (user, redirectCallback) => {
      dispatch(loginUser(user, redirectCallback));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));