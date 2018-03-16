import React from 'react';
import {Link} from 'react-router-dom';

import './nav-bar.css';

export default function NavBar() {
  return (
    <div className='nav-bar'>
      <div className='container'>
        <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/118696-200.png' />
        <h2>Training Tracker</h2>
        <p>track your fitness goals and progress</p>
        <ul>
          <li>
            <Link to='/register'><button>Register</button></Link>
          </li>
          <li>
            <Link to='/login'><button>Log In</button></Link>
          </li>
        </ul>
        <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/10897-200.png' className='arrow-down' />
      </div>
    </div>
  )
}
