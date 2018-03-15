import React, { Component } from 'react';

import TitleBar from './title-bar';
import DailyAddSection from './daily-add-section';
import MiniWorkoutLog from './mini-workout-log';
import Footer from './footer';

import {Link} from 'react-router-dom';

class UserHomePage extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <DailyAddSection />
        <MiniWorkoutLog />
        <Link to='/user/workoutlog'><button>Workout Log</button></Link>
        <Footer />
      </div>
    );
  }
}

export default UserHomePage;
