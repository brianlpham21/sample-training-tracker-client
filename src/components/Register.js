import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Register extends Component {
  render() {
    return (
      <div>
        <h1>Register!!!</h1>
        <Link to='/'><button>Back</button></Link>
      </div>
    );
  }
}

export default Register;
