import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import './index.css';

const BackgroundWrapper = props => {
  let { backgroundImage, styleClass, children } = props;

  return (
    <>
      <BackgroundImage className={styleClass} fluid={backgroundImage}>
        {children}
      </BackgroundImage>
    </>
  );
};

export default BackgroundWrapper;
