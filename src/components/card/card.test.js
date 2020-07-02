import React from 'react';
import renderer from 'react-test-renderer';
import Card from './card';
import {offer} from '../../mocks/test/offers';
import {nameBlockCards} from '../../mocks/test/card';

it(`check render Card`, () => {
  const tree = renderer.create(
      <Card
        offer={offer}
        onTitleCardClick={jest.fn()}
        onCardHover={jest.fn()}
        nameBlockCards={nameBlockCards}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
