import React, { Component } from 'react';

import Exercise from './exercise';

class Workout extends Component {
  render() {
    return (
      <div>
        <p>These are the exercises in the workout:</p>
        <Exercise />
        <Exercise />
      </div>
    );
  }
}

export default Workout;
