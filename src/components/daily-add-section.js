import React, { Component } from 'react';

import DailyAddForm from './daily-add-form';

class DailyAddSection extends Component {
  render() {
    return (
      <div>
        <h2>Add Data Section</h2>
        <DailyAddForm />
      </div>
    );
  }
}

export default DailyAddSection;
