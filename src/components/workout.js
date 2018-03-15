import React, { Component } from 'react';

import Exercise from './exercise';

class Workout extends Component {
  render() {
    return (
      <div>
        <p>This is a list of exercises</p>
        <Exercise />
        <Exercise />
      </div>
    );
  }
}

export default Workout;
