import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card";
import {offers} from '../../mocks/test/offers';
import {Router} from 'react-router-dom';
import history from '../../history';

Enzyme.configure({
  adapter: new Adapter(),
});

const onCardHover = jest.fn();
const onTitleCardClick = jest.fn();
const onActiveChange = jest.fn();
const onFavoriteOfferClick = jest.fn();

it(`to check Card should return offer and click on title`, () => {


  const card = mount(
      <Router
        history={history}
      >
        <Card
          offer={offers[0]}
          onTitleCardClick={onTitleCardClick}
          onCardHover={onCardHover}
          className={`cities`}
          onActiveChange={onActiveChange}
          activeItem={offers[0]}
          onFavoriteOfferClick={onFavoriteOfferClick}
        />
      </Router>
  );

  const place = card.find(`.place-card`);
  const titleCard = card.find(`.place-card__name a`);


  place.simulate(`onmouseover`, onCardHover(offers[0]));
  titleCard.simulate(`click`);

  expect(onCardHover.mock.calls[0][0]).toMatchObject(offers[0]);
  expect(onTitleCardClick).toHaveBeenCalled();
});
