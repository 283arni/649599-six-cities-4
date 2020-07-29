import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ScreenCity from './screen-city';
import {offers} from '../../mocks/test/offers';
import {user} from '../../mocks/test/user';
import {Router} from 'react-router-dom';
import history from '../../history';

const onCardHover = jest.fn();
const onSortChange = jest.fn();
const onTitleCardClick = jest.fn();
const onFavoriteOfferClick = jest.fn();

const nameSort = `Popular`;

it(`check render ScreenCity`, () => {
  const tree = renderer.create((
    <Router
      history={history}
    >
      <ScreenCity
        currentCity={`Amsterdam`}
        sortType={nameSort}
        onSortChange={onSortChange}
        onTitleCardClick={onTitleCardClick}
        onCardHover={onCardHover}
        hoverOffer={offers[0]}
        currentOffers={offers}
        onFavoriteOfferClick={onFavoriteOfferClick}
        user={user}
      />
    </Router>
  ), {
    createNodeMock: () => document.createElement(`div`)
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
