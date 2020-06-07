import React from 'react';
import './index.css';

const Footer = props => {
  return (
    <footer className='text-center py-3 mt-5'>
      <p>All rights reserved. &copy; {new Date().getFullYear().toString()}</p>
    </footer>
  );
};

export default Footer;
