import React from 'react';
import renderer from 'react-test-renderer';
import Card from './card';
import {offers} from '../../mocks/test/offers';

const onCardHover = jest.fn();
const onActiveChange = jest.fn();
const onTitleCardClick = jest.fn();

it(`check render Card`, () => {
  const tree = renderer.create(
      <Card
        offer={offers[0]}
        onTitleCardClick={onCardHover}
        onCardHover={onActiveChange}
        className={`cities`}
        onActiveChange={onTitleCardClick}
        activeItem={offers[0]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
