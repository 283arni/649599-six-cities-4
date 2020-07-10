import React from 'react';
import renderer from 'react-test-renderer';
import ScreenCity from './screen-city';
import {offers} from '../../mocks/test/offers';

const onCardHover = jest.fn();
const onSortChange = jest.fn();
const onTitleCardClick = jest.fn();

const nameSort = `Popular`;

it(`check render ScreenCity`, () => {
  const tree = renderer.create((
    <ScreenCity
      currentCity={`Amsterdam`}
      sortType={nameSort}
      onSortChange={onSortChange}
      onTitleCardClick={onTitleCardClick}
      onCardHover={onCardHover}
      hoverOffer={offers[0]}
      currentOffers={offers}
    />
  ), {
    createNodeMock: () => document.createElement(`div`)
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
