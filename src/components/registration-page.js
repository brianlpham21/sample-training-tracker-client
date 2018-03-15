import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import TitleBar from './title-bar';
import RegistrationForm from './registration-form';
import Footer from './footer';

class RegistrationPage extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <h1>Register!!!</h1>
        <RegistrationForm />
        <Link to='/'><button>Back</button></Link>
        <Footer />
      </div>
    );
  }
}

export default RegistrationPage;
