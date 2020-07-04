import React from 'react';
import renderer from 'react-test-renderer';
import ListOffers from './list-offers';
import {offers} from '../../mocks/test/offers';
import {nameBlockCards} from '../../mocks/test/card';

const onActiveChange = jest.fn();
const onTitleCardClick = jest.fn();
const onCardHover = jest.fn();

it(`check render ListOffers`, () => {
  const tree = renderer.create(
      <ListOffers
        offers={offers}
        onTitleCardClick={onTitleCardClick}
        onCardHover={onCardHover}
        nameBlockCards={nameBlockCards}
        onActiveChange={onActiveChange}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
