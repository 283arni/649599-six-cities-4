import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card";
import {offer} from '../../mocks/test/offers';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`to check Card should return offer and click on title`, () => {
  const onHoverCard = jest.fn();
  const titleCardHandler = jest.fn();

  const card = shallow(
      <Card
        offer={offer}
        titleCardHandler={titleCardHandler}
        onHover={onHoverCard}
      />
  );

  const place = card.find(`.place-card`);
  const titleCard = card.find(`.place-card__name a`);


  place.simulate(`onmouseover`, onHoverCard(offer));
  titleCard.simulate(`click`);

  expect(onHoverCard.mock.calls[0][0]).toMatchObject(offer);
  expect(titleCardHandler).toHaveBeenCalled();
});
