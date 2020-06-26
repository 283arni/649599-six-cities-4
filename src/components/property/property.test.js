import React from 'react';
import renderer from 'react-test-renderer';
import Property from './property';
import {offer, offers} from '../../mocks/test/offers';
import {reviews} from '../../mocks/test/reviews';

jest.mock(`../map-city/map-city`, () => `MapCity`);

it(`check render Property`, () => {
  const tree = renderer.create(
      <Property
        offer={offer}
        reviews={reviews}
        nearOffers={offers}
        onTitleCardClick={jest.fn()}
        onCardHover={jest.fn()}
      />
  );

  expect(tree).toMatchSnapshot();
});
