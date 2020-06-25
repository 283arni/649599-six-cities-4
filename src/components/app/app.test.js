import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {offers} from '../../mocks/test/offers';
import {reviews} from '../../mocks/test/reviews';

jest.mock(`../map-city/map-city`, () => `MapCity`);

it(`check render App`, () => {
  const tree = renderer.create(
      <App
        offers={offers}
        reviews={reviews}
      />
  );

  expect(tree).toMatchSnapshot();
});
