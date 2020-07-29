import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Card from "./card";
import {offers} from '../../mocks/test/offers';
import {user} from '../../mocks/test/user';
import {Link} from 'react-router-dom';

configure({
  adapter: new Adapter(),
});

const onCardHover = jest.fn();
const onTitleCardClick = jest.fn();
const onActiveChange = jest.fn();
const onFavoriteOfferClick = jest.fn();

it(`to check Card should return offer and click on title`, () => {


  const card = shallow(
      <Card
        offer={offers[0]}
        onTitleCardClick={onTitleCardClick}
        onCardHover={onCardHover}
        className={`cities`}
        onActiveChange={onActiveChange}
        activeItem={`Paris`}
        onFavoriteOfferClick={onFavoriteOfferClick}
        user={user}
      />
  );

  const place = card.find(`.place-card`);
  const links = card.find(Link);

  links.forEach((link) => {
    link.simulate(`click`);
  });

  place.simulate(`onmouseover`, onCardHover(offers[0]));

  expect(onCardHover.mock.calls[0][0]).toMatchObject(offers[0]);
  expect(onTitleCardClick).toHaveBeenCalled();
});
