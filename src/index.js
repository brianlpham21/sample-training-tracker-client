import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import RegistrationPage from './components/registration-page';
import LoginPage from './components/login-page';
import About from './components/about';

// import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/register' component={RegistrationPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/about' component={About} />
    </div>
  </Router>,
  document.getElementById('root')
);

// registerServiceWorker();
