import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {offers} from '../../mocks/test/offers';

it(`check render App`, () => {
  const tree = renderer.create(
      <App
        housingCount={offers.length}
        offers={offers}
      />
  );

  expect(tree).toMatchSnapshot();
});
