import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Card from './card';
import {offers} from '../../mocks/test/offers';
import {Router} from 'react-router-dom';
import history from '../../history';

const onCardHover = jest.fn();
const onActiveChange = jest.fn();
const onTitleCardClick = jest.fn();
const onFavoriteOfferClick = jest.fn();

it(`check render Card`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <Card
          offer={offers[0]}
          onTitleCardClick={onCardHover}
          onCardHover={onActiveChange}
          className={`cities`}
          onActiveChange={onTitleCardClick}
          activeItem={`Paris`}
          onFavoriteOfferClick={onFavoriteOfferClick}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
