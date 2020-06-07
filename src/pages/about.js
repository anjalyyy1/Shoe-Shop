import React from 'react';

import { Link, graphql } from 'gatsby';
import { get } from 'lodash';

import BackgroundWrapper from '../components/backgroundWrapper';
import Info from '../components/info';
import Footer from '../components/footer';
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
  }
`;

const About = props => {
  let { data } = props;
  return (
    <Layout>
      <BackgroundWrapper
        backgroundImage={get(data, `backgroundImage.childImageSharp.fluid`)}
      >
        <h2 className='banner-heading'>About us</h2>
      </BackgroundWrapper>
      <Info />
      <Footer />
    </Layout>
  );
};

export default About;
