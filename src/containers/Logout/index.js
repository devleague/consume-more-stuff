import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/user_actions';

class LogOut extends Component {
 constructor(props) {
   super(props)
 }

 componentDidMount() {
   const history = this.props.history
   console.log('history', history)
   this.props.logoutUser( () => {
    history.push('/')
   })
 }

render() {
 return (
   <div className="logOutContainer">
    <h3>Redirecting</h3>
   </div>
 )
}
}

const mapDispatchToProps = dispatch => {
 return {
   logoutUser: function (redirectCallback) {
     dispatch(logoutUser(redirectCallback));
   }
 }
}

export default connect(null, mapDispatchToProps)(LogOut);