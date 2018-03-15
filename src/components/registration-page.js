import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import RegistrationForm from './registration-form';

class RegistrationPage extends Component {
  render() {
    return (
      <div>
        <h1>Register!!!</h1>
        <RegistrationForm />
        <Link to='/'><button>Back</button></Link>
      </div>
    );
  }
}

export default RegistrationPage;
