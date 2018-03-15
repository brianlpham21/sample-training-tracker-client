import React, { Component } from 'react';

import {Link} from 'react-router-dom';

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
        <Link to='/'><button>Back</button></Link>
        <Footer />
      </div>
    );
  }
}

export default LoginPage;
