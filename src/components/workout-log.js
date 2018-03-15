import React, { Component } from 'react';

import Workout from './workout';

import {Link} from 'react-router-dom';

class WorkoutLog extends Component {
  render() {
    return (
      <div>
        <h2>Routine Name</h2>
        <p>These are a list of the workouts!</p>
        <Workout />
        <Workout />
        <Workout />
        <Link to='/user'><button>Back</button></Link>
      </div>
    );
  }
}

export default WorkoutLog;
