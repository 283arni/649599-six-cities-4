import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';
import {Provider} from "react-redux";
import {offers, offer} from '../../mocks/test/offers';
import {reviews} from '../../mocks/test/reviews';
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const onTitleClick = jest.fn();
const onCardHover = jest.fn();
const onCityClick = jest.fn();


it(`check render App`, () => {
  const store = mockStore({
    offers,
    reviews,
    offer,
    currentCity: offer.city.name
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          offers={offers}
          reviews={reviews}
          offer={offer}
          currentCity={offer.city.name}
          onTitleClick={onTitleClick}
          onCardHover={onCardHover}
          onCityClick={onCityClick}
        />
      </Provider>, {
        createNodeMock: () => document.createElement(`div`)
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
