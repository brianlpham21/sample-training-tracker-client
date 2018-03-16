import React from 'react';
import {Link} from 'react-router-dom';

import './title-bar.css';

export default function TitleBar() {
  return (
    <div className='title-bar'>
      <Link to='/'>Back</Link>
      <h2>Training Tracker</h2>
    </div>
  )
}
