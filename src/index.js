import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Register from './components/Register';
import Login from './components/Login';
import About from './components/About';

// import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/about' component={About} />
    </div>
  </Router>,
  document.getElementById('root')
);

// registerServiceWorker();
