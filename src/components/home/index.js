import React from 'react';
import { get } from 'lodash';

import BackgroundWrapper from '../backgroundWrapper';
import Offer from '../offer';
import Footer from '../footer';
import './index.css';
import Menu from './components/menu';
import SpecialProducts from './components/specialProducts';

const Home = props => {
  let { data } = props;
  return (
    <>
      <BackgroundWrapper
        styleClass='jumbotron'
        backgroundImage={get(data, `backgroundImage.childImageSharp.fluid`)}
      >
        <h2 className='banner-heading'>Let's grab a cup of coffee...</h2>
      </BackgroundWrapper>
      <Menu menu={get(data, `menu`)} />
      <SpecialProducts />
    </>
  );
};

export default Home;
