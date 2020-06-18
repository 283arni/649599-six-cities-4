import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {Ads} from '../../mocks/test/const';
import {offers} from '../../mocks/test/offers';

it(`check render Main`, () => {
  const tree = renderer.create(
      <Main
        housingCount={Ads.HOUSING_COUNT}
        offers={offers}
        titleCardHandler={jest.fn()}
      />
  );

  expect(tree).toMatchSnapshot();
});
