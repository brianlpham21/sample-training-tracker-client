import React, { Component } from 'react';

import TitleBar from './title-bar';
import Routine from './routine';
import WorkoutSection from './workout-section';
import Footer from './footer';

class UserHomePage extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <Routine />
        <WorkoutSection />
        <Footer />
      </div>
    );
  }
}

export default UserHomePage;
