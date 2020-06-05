import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

// components
import Navbar from '../components/navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
