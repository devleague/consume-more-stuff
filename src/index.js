import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// import { Redirect } from 'react-router';

import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './containers/App';
import Header from './components/header';
import NewItemForm from './containers/NewItemForm';
import AllItemView from './containers/AllItemView';
import Login from './containers/Login';
import Logout from './containers/Logout';
import RegistrationForm from './containers/RegistrationForm';
import Users from './containers/Users';
import Dashboard from './containers/Dashboard';

import registerServiceWorker from './registerServiceWorker';



const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div id="content-div">
      <Header />
      <div id="nav">
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/new-item">New Item</Link>
        <br></br>
        <Link to="/all">All Items</Link>
        <br></br>
        <Link to="/users">Users</Link>
        <br></br>
        <Link to="/register">Register</Link>
        <br></br>
        <Link to="/dashboard">Dashboard</Link>
        <br></br>
        <Link to="/login">Login</Link>
        <br></br>
        <Link to="/logout">Logout</Link>
      </div>

      <Route exact path="/" component={App} />
      <Route path="/new-item" component={NewItemForm} />
      <Route path="/all" component={AllItemView} />
      <Route path="/users" component={Users} />
      <Route path="/register" component={RegistrationForm} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />


    </div>
  </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
