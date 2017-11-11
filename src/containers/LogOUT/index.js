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
      <div id="logout-container">

        <div id="gator">
          <img src="/assets/gator.png" alt="gator"/>
        </div>

        <h2>See you later, alligator!</h2>

        <form className="logout-form" onSubmit={this.handleSubmit.bind(this)}>

          <button
            className="logout-btn"
            type="submit"
            onClick={this.handleSubmit}>
            Take Me Back Home
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