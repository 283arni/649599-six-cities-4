import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Property from "./property";
import {offers} from '../../mocks/test/offers';
import {reviews} from '../../mocks/test/reviews';
import {user} from '../../mocks/test/user';

Enzyme.configure({
  adapter: new Adapter(),
});

const onCardHover = jest.fn();
const onReviewSubmit = jest.fn();
const onFavoriteOfferClick = jest.fn();

it(`in Property click on titles cards`, () => {
  const onTitleCardClick = jest.fn();

  const property = shallow(
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
  );

  const titlesCards = property.find(`.place-card__name a`);

  titlesCards.forEach((titleClick) => {
    titleClick.simulate(`click`);
  });

  expect(onTitleCardClick).toHaveBeenCalledTimes(titlesCards.length);
});

