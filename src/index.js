import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Poop from './components/Poop';

// import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/poop' component={Poop} />
    </div>
  </Router>,
  document.getElementById('root')
);

// registerServiceWorker();
