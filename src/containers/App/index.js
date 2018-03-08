import React, { Component } from 'react';

import Header from '../../components/Header';
import Nav from '../../components/NavBar';
import Main from '../../components/Main';
import '../../scss/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="page-container">
          <Nav />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
