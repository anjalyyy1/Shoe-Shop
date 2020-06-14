import React from 'react';
import { Link } from 'gatsby';

import Title from '../title';
import './index.css';
import { map, get } from 'lodash';

const Offers = props => {
  let { offers } = props;

  return (
    <section className='text-center wrapper'>
      <Title titleText='What we Offer' />
      <div className='card-deck offer-deck'>
        {map(get(offers, `edges`), ({ node }) => {
          console.log(node, '===');
          return (
            <div className='card'>
              <div className='offer-image-wrapper'>
                <img
                  src={get(node, `image.fixed.src`)}
                  className='card-img-top offer-img'
                  alt='...'
                />
              </div>

              <div className='card-body'>
                <h5 className='card-title'>{get(node, `title`)}</h5>
                <p className='card-text'>{get(node, `description`)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Offers;
