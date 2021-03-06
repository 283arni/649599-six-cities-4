import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ListOffers from './list-offers';
import {offers} from '../../mocks/test/offers';
import {user} from '../../mocks/test/user';
import {Router} from 'react-router-dom';
import history from '../../history';

const onActiveChange = jest.fn();
const onTitleCardClick = jest.fn();
const onCardHover = jest.fn();
const onFavoriteOfferClick = jest.fn();

it(`check render ListOffers`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <ListOffers
          offers={offers}
          onTitleCardClick={onTitleCardClick}
          onCardHover={onCardHover}
          className={`cities`}
          onActiveChange={onActiveChange}
          onFavoriteOfferClick = {onFavoriteOfferClick}
          activeItem={offers[0]}
          user={user}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
