import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

import rootReducer from './reducers';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';


const boundCompose = compose.bind(null, applyMiddleware(thunk));
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? boundCompose(window.__REDUX_DEVTOOLS_EXTENSION__()) : boundCompose()
);

WebFont.load({
  google: {
    families: ['Karla:400,400i,700', 'sans-serif']
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
   </Provider>,
   document.getElementById('root'));
  registerServiceWorker();