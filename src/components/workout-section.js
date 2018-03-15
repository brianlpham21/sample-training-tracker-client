import React, { Component } from 'react';

import Workout from './workout';

class WorkoutSection extends Component {
  render() {
    return (
      <div>
        <p>These are a list of the workouts!</p>
        <Workout />
        <Workout />
        <Workout />
      </div>
    );
  }
}

export default WorkoutSection;
