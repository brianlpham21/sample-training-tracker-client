import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
        <h1>About!!!</h1>
        <Link to='/'><button>Back</button></Link>
      </div>
    );
  }
}

export default About;
