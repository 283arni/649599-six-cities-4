import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card";
import {offer} from '../../mocks/test/offers';
import {nameBlockCards} from '../../mocks/test/card';

Enzyme.configure({
  adapter: new Adapter(),
});

const onCardHover = jest.fn();
const onTitleCardClick = jest.fn();
const onActiveChange = jest.fn();

it(`to check Card should return offer and click on title`, () => {


  const card = shallow(
      <Card
        offer={offer}
        onTitleCardClick={onTitleCardClick}
        onCardHover={onCardHover}
        nameBlockCards={nameBlockCards}
        onActiveChange={onActiveChange}
        activeItem={offer}
      />
  );

  const place = card.find(`.place-card`);
  const titleCard = card.find(`.place-card__name a`);


  place.simulate(`onmouseover`, onCardHover(offer));
  titleCard.simulate(`click`);

  expect(onCardHover.mock.calls[0][0]).toMatchObject(offer);
  expect(onTitleCardClick).toHaveBeenCalled();
});
