import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import RegistrationPage from './components/registration-page';
import LoginPage from './components/login-page';
import About from './components/about';

import UserHomePage from './components/user-home-page';
import WorkoutLog from './components/workout-log';
import EditWorkout from './components/edit-workout';

// import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/register' component={RegistrationPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/about' component={About} />

      <Route exact path='/user' component={UserHomePage} />
      <Route exact path='/user/workoutlog' component={WorkoutLog} />
      <Route exact path='/user/workoutlog/editworkout' component={EditWorkout} />

    </div>
  </Router>,
  document.getElementById('root')
);

// registerServiceWorker();
