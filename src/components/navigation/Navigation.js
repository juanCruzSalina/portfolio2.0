import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <main className='nav__main'>
      <div className='nav__fist__section'>
        <Link to='/' className='link'>
          <i className='fas fa-home'></i>
          Home
        </Link>
        <Link to='/presentation' className='link'>
          <i className='fas fa-info-circle'></i>
          About me
        </Link>
        <Link to='/projects' className='link'>
          <i className='fas fa-folder-open'></i>
          Projects
        </Link>
      </div>
      <div className='nav__second-section'>
        <Link to='/contact' className='link'>
          <i className='fas fa-user-alt'></i>
          Contact
        </Link>
      </div>
    </main>
  );
};
