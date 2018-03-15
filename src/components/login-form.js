import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import {Link} from 'react-router-dom';

class LoginForm extends Component {
  render() {
    return (
      <form>
        <input />
        <button
            type="submit">
            Register
        </button>
      </form>
    );
  }
}

export default LoginForm;
