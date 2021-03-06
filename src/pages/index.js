import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/home';

export const query = graphql`
  {
    backgroundImage: file(relativePath: { eq: "bgimage.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    menu: allContentfulMenuItem {
      edges {
        node {
          id
          title
          price
          description {
            description
          }
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title='Home' />
      <Home data={data} />
    </Layout>
  );
};

export default IndexPage;
