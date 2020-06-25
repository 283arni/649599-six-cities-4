import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {offers} from '../../mocks/test/offers';


jest.mock(`../map-city/map-city`, () => `MapCity`);

it(`check render Main`, () => {
  const tree = renderer.create(
      <Main
        offers={offers}
        onTitleCardClick={jest.fn()}
        onCardHover={jest.fn()}
      />
  );

  expect(tree).toMatchSnapshot();
});
