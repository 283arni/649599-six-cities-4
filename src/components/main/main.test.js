import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {offers} from '../../mocks/test/offers';

it(`check render Main`, () => {
  const tree = renderer.create(
      <Main
        housingCount={offers.length}
        offers={offers}
        titleCardHandler={jest.fn()}
        onHover={jest.fn()}
      />
  );

  expect(tree).toMatchSnapshot();
});
