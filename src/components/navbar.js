import React from 'react';

import './navbar.css';

export default function NavBar() {
  return (
    <div className='nav-bar'>
      <h2>Training Tracker</h2>
      <ul>
        <li><a href='#'>Register</a></li>
        <li><a href='#'>Login</a></li>
      </ul>
    </div>
  )
}
