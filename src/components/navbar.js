import React from 'react';
import {Link} from 'react-router-dom';

import './navbar.css';

export default function NavBar() {
  return (
    <div className='nav-bar'>
      <h2>Training Tracker</h2>
      <ul>
        <li><Link to='/register'><button>Register</button></Link></li>
        <li><Link to='/login'><button>Log In</button></Link></li>
      </ul>
    </div>
  )
}
