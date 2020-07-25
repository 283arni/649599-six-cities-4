import * as React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {offers} from '../../mocks/test/offers';
import {user} from '../../mocks/test/user';
import {Router} from 'react-router-dom';
import history from '../../history';

const nameSort = `Popular`;

const onTitleCardClick = jest.fn();
const onCardHover = jest.fn();
const onCityClick = jest.fn();
const onSortChange = jest.fn();
const onFavoriteOfferClick = jest.fn();

it(`check render Main`, () => {
  const tree = renderer.create((
    <Router
      history={history}
    >
      <Main
        offers={offers}
        onTitleCardClick={onTitleCardClick}
        onCardHover={onCardHover}
        currentCity={offers[0].city.name}
        onCityClick={onCityClick}
        sortType={nameSort}
        onSortChange={onSortChange}
        user={user}
        onFavoriteOfferClick={onFavoriteOfferClick}
      />
    </Router>)
  , {
    createNodeMock: () => document.createElement(`div`)
  }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
