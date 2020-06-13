import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {Ads, namesCards} from '../../mock/test/base';

it(`check render Main`, () => {
  const tree = renderer.create(
      <Main
        housingCount={Ads.HOUSING_COUNT}
        namesCards={namesCards}
        onTitleCardClick={jest.fn()}
      />
  );

  expect(tree).toMatchSnapshot();
});
