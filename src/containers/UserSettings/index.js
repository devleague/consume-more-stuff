import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editUser } from '../../actions/user_actions';


class UserSettings extends Component {
  constructor(props) {
    super(props);

    const user = JSON.parse(localStorage.getItem('user'));

    this.state = {
      email: user.email,
      username: user.username,
      password: '',
      newPassword: '',
      id: user.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    console.log('user', user);
    const history = this.props.history;
    this.props.editUser(user, (response) => {
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
      <div className="user-settings-form">
        <header><h1>User Settings</h1></header>
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
            placeholder="current password"
            name="password"
            onChange={this.handleInput}
          />
          <input
            type="text"
            placeholder="new password"
            name="newPassword"
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
    editUser: (user, redirectCallback) => {
      dispatch(editUser(user, redirectCallback));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSettings));