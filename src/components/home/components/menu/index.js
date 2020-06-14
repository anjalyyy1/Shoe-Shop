import React, { useState } from 'react';
import Title from '../../../title';
import Img from 'gatsby-image';
import { map, get, filter, each } from 'lodash';

const filterOptions = [
  {
    label: 'All',
    optionName: 'all'
  },
  {
    label: 'Coffee',
    optionName: 'Coffee'
  },
  {
    label: 'Tea',
    optionName: 'tea'
  },
  {
    label: 'Sandwiches',
    optionName: 'sandwich'
  },
  {
    label: 'Bakery',
    optionName: 'bakery'
  }
];

const Menu = props => {
  const [selectedOption, setSelectedOption] = useState('all');
  let { menu } = props;

  let menuItems =
    selectedOption !== 'all'
      ? filter(
          get(menu, `edges`),
          eachEdge => get(eachEdge, `node.category`) === selectedOption
        )
      : get(menu, `edges`);

  return (
    <div className='menu-section-wrapper'>
      <div className='wrapper'>
        <Title titleText='Our Menu' />

        <div className='filter-options'>
          {map(filterOptions, (eachOption, index) => {
            return (
              <span
                key={index}
                onClick={() => setSelectedOption(get(eachOption, `optionName`))}
                className={`filter-button btn btn-outline-warning ${
                  selectedOption === eachOption.optionName && 'active-filter'
                }`}
              >
                {eachOption.label}
              </span>
            );
          })}
        </div>
        <div className='list-group-flush'>
          {map(menuItems, (eachEdge, index) => {
            return (
              <div
                className='list-group-item list-group-item-action'
                key={index}
              >
                <div className='image-name'>
                  <Img
                    fixed={get(eachEdge, `node.image.fixed`)}
                    alt={get(eachEdge, `node.title`)}
                  />
                  <span className='menu-title'>
                    {get(eachEdge, `node.title`)}
                  </span>
                </div>

                <span className='menu-price'>
                  ₹{get(eachEdge, `node.price`)}
                </span>
                <p>{get(eachEdge, `node.description.description`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
