import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logoutUser } from '../../actions/auth.actions';

class Logout extends Component {
  constructor(props){
    super(props);
    console.log(props, "PROPS");

    this.state = {
      redirect : false // set initial state to false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(evt) {
    evt.preventDefault();
    let logoutCreds = {
      username : this.state.username,
      password : this.state.password
    }

    this.props.logoutUser(logoutCreds);

    this.setState(
    {
      username : '',
      password : '',
      redirect : true
    });
  }

  componentDidMount(){
    localStorage.clear();
    this.props.logoutUser();
  }

  render(){
    if(this.state.redirect) {
      return <Redirect to="/"/>
    }
    return (
      <div>

        <form onSubmit={this.handleSubmit.bind(this)}>

          <p>See you next time!</p>

          <button type="submit" className="logout-button" onClick={this.handleSubmit}>Redirect Me Home
          </button>

        </form>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users : state.userList
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    logoutUser: () => {
      dispatch(logoutUser());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);