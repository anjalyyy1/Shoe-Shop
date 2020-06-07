import React from 'react';
import { Link } from 'gatsby';

import Title from '../title';
import './index.css';

const Story = props => {
  return (
    <section className='text-center wrapper'>
      <Title titleText='Our Story' />
      <div className='text-center info-text'>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like)
        </p>
        <Link to='/about'>
          <button type='button' class='btn about-page-btn btn-lg'>
            Explore more
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Story;
