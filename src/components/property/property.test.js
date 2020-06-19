import React from 'react';
import renderer from 'react-test-renderer';
import Property from './property';
import {property} from '../../mocks/test/offers';

it(`check render Property`, () => {
  const tree = renderer.create(
      <Property
        property={property}
      />
  );

  expect(tree).toMatchSnapshot();
});
