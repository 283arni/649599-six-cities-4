import React from 'react';
import renderer from 'react-test-renderer';
import ListOffers from './list-offers';
import {offers} from '../../mocks/test/offers';

it(`check render ListOffers`, () => {
  const tree = renderer.create(
      <ListOffers
        offers={offers}
        titleCardHandler={jest.fn()}
      />
  );

  expect(tree).toMatchSnapshot();
});
