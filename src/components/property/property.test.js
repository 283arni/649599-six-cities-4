import React from 'react';
import renderer from 'react-test-renderer';
import Property from './property';
import {Router} from 'react-router-dom';
import history from '../../history';
import {offers} from '../../mocks/test/offers';
import {reviews} from '../../mocks/test/reviews';
import {user} from '../../mocks/test/user';

const onCardHover = jest.fn();
const onTitleCardClick = jest.fn();
const onReviewSubmit = jest.fn();
const onFavoriteOfferClick = jest.fn();

it(`check render Property`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <Property
          offer={offers[0]}
          reviews={reviews}
          nearOffers={offers}
          onTitleCardClick={onTitleCardClick}
          onCardHover={onCardHover}
          user={user}
          onReviewSubmit={onReviewSubmit}
          isBlocked={false}
          onFavoriteOfferClick={onFavoriteOfferClick}
        />
      </Router>, {
        createNodeMock: () => document.createElement(`div`)
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
