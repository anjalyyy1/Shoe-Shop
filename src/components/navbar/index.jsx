import React, { useState } from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo.svg';
import { map } from 'lodash';
import './navbar.css';

const links = [
  {
    path: `/`,
    text: 'Home'
  },
  {
    path: `/about`,
    text: 'About'
  },
  {
    path: `/contact`,
    text: 'Contact'
  }
];

const NavBar = props => {
  const [navBarOpen, setNavBar] = useState(false);

  return (
    <nav className='navbar navbar-expand-sm'>
      <Link to='/' className='navbar-brand'>
        <div style={{ width: '50px' }}>
          <img src={logo} alt='Shoe Shop' className='img-fluid' />
        </div>
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        onClick={() => setNavBar(!navBarOpen)}
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div
        className={`collapse navbar-collapse justify-content-end ${
          !navBarOpen && 'show'
        }`}
      >
        <ul className='navbar-nav '>
          {map(links, (eachLink, index) => {
            return (
              <li key={index} className='nav-item'>
                <Link to={eachLink.path} className='nav-link'>
                  {eachLink.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
