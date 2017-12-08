import React, { Component } from 'react';


// import { render } from "react-dom";
// import { Redirect } from 'react-router-dom';
// import Nav from '../../components/nav.components';
// import Footer from '../../components/footer.components';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any child components 
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    let errorInfo = this.state.errorInfo;
    let error = this.state.error;

    if (errorInfo) {
      return (
        <div>
          <h2>{"Oh Junk!! Something went wrong"}</h2>
          <p className="red">
            {error && error.toString()}
          </p>
          <div>{"Component Stack Error Details: "}</div>
          <p className="red">{errorInfo.componentStack}</p>
        </div>
      );
    }
    // Renders CHildren 
    return this.props.children;
  }
}

export default ErrorBoundary;