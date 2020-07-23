import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';
import {Provider} from "react-redux";
import {offers, favoriteOffers} from '../../mocks/test/offers';
import {reviews} from '../../mocks/test/reviews';
import {user} from '../../mocks/test/user';
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const onTitleClick = jest.fn();
const onCardHover = jest.fn();
const onCityClick = jest.fn();
const onSortChange = jest.fn();
const onLoginSubmit = jest.fn();
const onReviewSubmit = jest.fn();
const onFavoriteOfferClick = jest.fn();

it(`check render App`, () => {
  const store = mockStore({
    offers,
    reviews,
    offer: offers[0],
    currentCity: offers[0].city.name,
    sortType: `Popular`
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          offers={offers}
          reviews={reviews}
          offer={offers[0]}
          currentCity={offers[0].city.name}
          onTitleClick={onTitleClick}
          onCardHover={onCardHover}
          onCityClick={onCityClick}
          sortType={`Popular`}
          onSortChange={onSortChange}
          nearOffers={offers}
          hoverOffer={offers[0]}
          isAuth={true}
          onLoginSubmit={onLoginSubmit}
          user={user}
          onReviewSubmit={onReviewSubmit}
          isBlocked={false}
          onFavoriteOfferClick={onFavoriteOfferClick}
          favoriteOffers={favoriteOffers}
        />
      </Provider>, {
        createNodeMock: () => document.createElement(`div`)
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
