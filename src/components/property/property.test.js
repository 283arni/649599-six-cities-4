import React from 'react';
import renderer from 'react-test-renderer';
import Property from './property';
import {offer, offers} from '../../mocks/test/offers';
import {reviews} from '../../mocks/test/reviews';

const onCardHover = jest.fn();
const onTitleCardClick = jest.fn();

it(`check render Property`, () => {
  const tree = renderer.create(
      <Property
        offer={offer}
        reviews={reviews}
        nearOffers={offers}
        onTitleCardClick={onTitleCardClick}
        onCardHover={onCardHover}
        currentCity={offer.city.name}
      />, {
        createNodeMock: () => document.createElement(`div`)
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
