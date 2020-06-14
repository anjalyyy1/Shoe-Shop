import React from 'react';
import Title from '../../../title';
import { useStaticQuery, graphql } from 'gatsby';
import { map, get } from 'lodash';
const SpecialProducts = props => {
  const data = useStaticQuery(
    graphql`
      query {
        specialProducts: allContentfulSpecialProducts {
          edges {
            node {
              title
              price
              image {
                fixed(width: 400, height: 400) {
                  src
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <>
      <Title titleText='Our Specials' />
      <div className='special-product-wrapper wrapper'>
        {map(get(data, `specialProducts.edges`), ({ node }, index) => {
          return (
            <div key={index} className='card' style={{ width: '18rem' }}>
              <div className='card-img-top'>
                <img
                  className='card-img-top'
                  src={get(node, `image.fixed.src`)}
                  alt={get(node, `title`)}
                />
              </div>
              <div className='card-body'>
                <h5 className='card-title'>{get(node, `title`)}</h5>
                <span>₹{get(node, `price`)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SpecialProducts;
