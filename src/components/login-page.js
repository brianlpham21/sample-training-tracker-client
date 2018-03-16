import React, { Component } from 'react';

import TitleBar from './title-bar';
import LoginForm from './login-form';
import Footer from './footer';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <h1>Login!!!</h1>
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

export default LoginPage;
