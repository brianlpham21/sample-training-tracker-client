import React, { Component } from 'react';

import TitleBar from './title-bar';
import Workout from './workout';
import Footer from './footer';

import {Link} from 'react-router-dom';

class WorkoutLog extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <h2>Routine Name</h2>
        <p>These are a list of the workouts!</p>
        <Workout />
        <Workout />
        <Workout />
        <Footer />
      </div>
    );
  }
}

export default WorkoutLog;
