import React from 'react';
import renderer from 'react-test-renderer';
import Card from './card';
import {titleCard} from '../../mock/test/card';

it(`check render Card`, () => {
  const tree = renderer.create(
      <Card
        nameCard={titleCard}
        onTitleCardClick={jest.fn()}
      />
  );

  expect(tree).toMatchSnapshot();
});
