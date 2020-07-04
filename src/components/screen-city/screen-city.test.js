import React from 'react';
import renderer from 'react-test-renderer';
import ScreenCity from './screen-city';
import {offer, offers} from '../../mocks/test/offers';

const onCardHover = jest.fn();
const onSortChange = jest.fn();
const onTitleCardClick = jest.fn();


it(`check render ScreenCity`, () => {
  const tree = renderer.create((
    <ScreenCity
      currentCity={`Amsterdam`}
      sortType={`Popular`}
      onSortChange={onSortChange}
      onTitleCardClick={onTitleCardClick}
      onCardHover={onCardHover}
      hoverOffer={offer}
      currentOffers={offers}
    />
  ), {
    createNodeMock: () => document.createElement(`div`)
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
