import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import reducers from './reducers';
import thunk from 'redux-thunk';
import './index.scss';
//---------------------------------------
import App from './containers/App';
import Register from './containers/Register';
import LogIN from './containers/LogIN';
import LogOUT from './containers/LogOUT';
import SingleItemView from './containers/SingleItemView';
//---------------------------------------

import registerServiceWorker from './lib/registerServiceWorker';


const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
    <Router>
      <div id="source">
        <header id="global-nav-header">
        <div id="logo">
          <img src="/assets/jnkr-logo.jpg" />
        </div>
        </header>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>

          <Route path="/register" component={Register} />
          <Route path="/login" component={LogIN} />
          <Route path="/items/:id" component={SingleItemView} />
          <Route path="/logout" component={LogOUT} />
        </div>

        <br/>
        <br/>
            <Route exact path="/" component={App} />
      </div>
    </Router>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
