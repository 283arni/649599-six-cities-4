import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {Ads} from '../../mocks/test/const';
import {offers} from '../../mocks/test/offers';

it(`check render App`, () => {
  const tree = renderer.create(
      <App
        housingCount={Ads.HOUSING_COUNT}
        offers={offers}
      />
  );

  expect(tree).toMatchSnapshot();
});