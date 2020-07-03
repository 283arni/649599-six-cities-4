import React from 'react';
import renderer from 'react-test-renderer';
import Card from './card';
import {offer} from '../../mocks/test/offers';
import {nameBlockCards} from '../../mocks/test/card';

const onCardHover = jest.fn();
const onActiveChange = jest.fn();
const onTitleCardClick = jest.fn();

it(`check render Card`, () => {
  const tree = renderer.create(
      <Card
        offer={offer}
        onTitleCardClick={onCardHover}
        onCardHover={onActiveChange}
        nameBlockCards={nameBlockCards}
        onActiveChange={onTitleCardClick}
        activeItem={offer}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
