import React from 'react';

import { graphql } from 'gatsby';
import { get } from 'lodash';

import BackgroundWrapper from '../components/backgroundWrapper';
import Offers from '../components/offer';
import Layout from '../components/layout';

export const query = graphql`
  {
    backgroundImage: file(relativePath: { eq: "aboutImage.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    offers: allContentfulOffers {
      edges {
        node {
          id
          title
          description
          image {
            fixed {
              src
            }
          }
        }
      }
    }
  }
`;

const About = props => {
  let { data } = props;
  console.log(data);
  return (
    <Layout>
      <BackgroundWrapper
        styleClass='page-background'
        backgroundImage={get(data, `backgroundImage.childImageSharp.fluid`)}
      >
        <h2 className='banner-heading'>About us</h2>
      </BackgroundWrapper>
      <Offers offers={get(data, `offers`)} />
    </Layout>
  );
};

export default About;
