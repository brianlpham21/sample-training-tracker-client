import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import {Link} from 'react-router-dom';

// import Input from './input';

class RegistrationForm extends Component {
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

export default RegistrationForm;
