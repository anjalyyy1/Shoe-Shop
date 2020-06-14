import React from 'react';
import Form from '../components/form/container';
import BackgroundWrapper from '../components/backgroundWrapper';
import { graphql } from 'gatsby';
import { get } from 'lodash';

import Layout from '../components/layout';
export const query = graphql`
  {
    backgroundImage: file(relativePath: { eq: "contactImage.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const ContactPage = props => {
  let { data } = props;

  return (
    <Layout>
      <BackgroundWrapper
        styleClass='page-background'
        backgroundImage={get(data, `backgroundImage.childImageSharp.fluid`)}
      >
        <h2 className='banner-heading'>Contact us</h2>
      </BackgroundWrapper>
      <Form />
    </Layout>
  );
};

export default ContactPage;
