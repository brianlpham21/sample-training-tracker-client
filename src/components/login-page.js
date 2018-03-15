import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import LoginForm from './login-form';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <h1>Login!!!</h1>
        <LoginForm />
        <Link to='/'><button>Back</button></Link>
      </div>
    );
  }
}

export default LoginPage;
