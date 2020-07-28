import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Favorites from './favorites';
import {Router} from 'react-router-dom';
import history from '../../history';
import {favoriteOffers} from '../../mocks/test/offers';
import {user} from '../../mocks/test/user';

const onFavoriteOfferClick = jest.fn();
const onCardHover = jest.fn();
const onTitleCardClick = jest.fn();

it(`check render Favorites`, () => {

  const tree = renderer.create(
      <Router
        history={history}
      >
        <Favorites
          favoriteOffers={favoriteOffers}
          onFavoriteOfferClick={onFavoriteOfferClick}
          onTitleCardClick={onTitleCardClick}
          onCardHover={onCardHover}
          user={user}
          activeItem={`Paris`}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
