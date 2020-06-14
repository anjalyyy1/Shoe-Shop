import React from 'react';
import './index.css';

const Title = props => {
  let { titleText } = props;

  return (
    <>
      <h3 className='section-heading text-center display-4 font-weight-bold my-5'>
        {titleText}
      </h3>
      <div className='line'></div>
    </>
  );
};

export default Title;
