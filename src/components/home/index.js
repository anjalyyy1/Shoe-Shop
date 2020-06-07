import React from 'react';
import { Link, graphql } from 'gatsby';
import { get } from 'lodash';

import BackgroundWrapper from '../backgroundWrapper';
import Info from '../info';
import Footer from '../footer';
import Form from '../form';
import './index.css';

const Home = props => {
  let { data } = props;
  return (
    <>
      <BackgroundWrapper
        backgroundImage={get(data, `backgroundImage.childImageSharp.fluid`)}
      >
        <h2 className='banner-heading'>Let's grab a cup of coffee...</h2>
      </BackgroundWrapper>
      <Info />
      <Form />
      <Footer />
    </>
  );
};

export default Home;
