import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {offers, offer} from '../../mocks/test/offers';


// jest.mock(`../map-city/map-city`, () => `MapCity`);

const onTitleCardClick = jest.fn();
const onCardHover = jest.fn();
const onCityClick = jest.fn();

it(`check render Main`, () => {
  const tree = renderer.create(
      <Main
        offers={offers}
        onTitleCardClick={onTitleCardClick}
        onCardHover={onCardHover}
        currentCity={offer.city.name}
        onCityClick={onCityClick}
      />, {
        createNodeMock: () => document.createElement(`div`)
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
