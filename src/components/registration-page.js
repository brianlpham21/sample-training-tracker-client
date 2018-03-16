import React, { Component } from 'react';

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
        <Footer />
      </div>
    );
  }
}

export default RegistrationPage;
