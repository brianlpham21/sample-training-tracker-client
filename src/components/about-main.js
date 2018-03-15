import React from 'react';
import {Link} from 'react-router-dom';

import './about-main.css';

export default function AboutMain() {
  return (
    <div className='main-about'>
      <Link to='/about'><h2 className='main-about-link'>About Training Tracker</h2></Link>
      <p>The Training Tracker application aims to make it easier for those looking to track their fitness progress</p>
    </div>
  )
}
