import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {offers} from '../../mocks/test/offers';
import {user} from '../../mocks/test/user';

const nameSort = `Popular`;

const onTitleCardClick = jest.fn();
const onCardHover = jest.fn();
const onCityClick = jest.fn();
const onSortChange = jest.fn();

it(`check render Main`, () => {
  const tree = renderer.create(
      <Main
        offers={offers}
        onTitleCardClick={onTitleCardClick}
        onCardHover={onCardHover}
        currentCity={offers[0].city.name}
        onCityClick={onCityClick}
        sortType={nameSort}
        onSortChange={onSortChange}
        user={user}
      />, {
        createNodeMock: () => document.createElement(`div`)
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
