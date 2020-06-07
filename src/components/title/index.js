import React from 'react';
import './index.css';

const Title = props => {
  let { titleText } = props;

  return (
    <h3 className='text-center display-4 font-weight-bold my-5'>{titleText}</h3>
  );
};

export default Title;
