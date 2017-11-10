import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
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
    console.log(evt);
    evt.preventDefault();

    this.props.logoutUser();
    this.setState(
    {
      redirect : true
    });
  }

  componentDidMount(){
    this.props.logoutUser();
  }

  render(){
    if(this.state.redirect) {
      return <Redirect to="/"/>
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <button type="submit" className="logout-button" onClick={this.handleSubmit}>Logout</button>
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