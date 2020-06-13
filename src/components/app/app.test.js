import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {Ads, namesCards} from '../../mock/test/base';

it(`check render App`, () => {
  const tree = renderer.create(
      <App
        housingCount={Ads.HOUSING_COUNT}
        namesCards={namesCards}
      />
  );

  expect(tree).toMatchSnapshot();
});
