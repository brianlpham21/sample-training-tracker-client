import React from 'react';
import {Link} from 'react-router-dom';

import './about-main.css';

export default function AboutMain() {
  return (
    <div className='main-about'>
      <h2><Link to='/about'>About Training Tracker</Link></h2>
      <p>The Training Tracker application aims to make it easier for those looking to track their fitness progress</p>
    </div>
  )
}
