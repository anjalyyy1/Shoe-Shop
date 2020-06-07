import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import './index.css';

const BackgroundWrapper = props => {
  let { backgroundImage, styleClass, title, children } = props;

  console.log(backgroundImage, '--');
  return (
    <>
      <BackgroundImage className='jumbotron' fluid={backgroundImage}>
        {children}
      </BackgroundImage>
    </>
  );
};

export default BackgroundWrapper;
