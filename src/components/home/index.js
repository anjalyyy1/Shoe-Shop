import React from 'react';
import { get } from 'lodash';

import BackgroundWrapper from '../backgroundWrapper';
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
        <h2 className='banner-heading'>One of a Kind Coffee house</h2>
      </BackgroundWrapper>
      <Menu menu={get(data, `menu`)} />
      <SpecialProducts />
    </>
  );
};

export default Home;
