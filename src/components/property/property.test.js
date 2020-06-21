import React from 'react';
import renderer from 'react-test-renderer';
import Property from './property';
import {offer} from '../../mocks/test/offers';

it(`check render Property`, () => {
  const tree = renderer.create(
      <Property
        offer={offer}
        onTitleCardClick={jest.fn()}
      />
  );

  expect(tree).toMatchSnapshot();
});
