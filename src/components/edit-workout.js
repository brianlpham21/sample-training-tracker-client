import React, { Component } from 'react';

import TitleBar from './title-bar';
import Footer from './footer';

class EditWorkout extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <p>Edit This Workout</p>
        <button>Submit</button>
        <Footer />
      </div>
    );
  }
}

export default EditWorkout;
