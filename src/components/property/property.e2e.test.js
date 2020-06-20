import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Property from "./property";
import {offer} from '../../mocks/test/offers';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`in Property click on titles cards`, () => {
  const titleCardClick = jest.fn();

  const property = shallow(
      <Property
        offer={offer}
        titleCardClick={titleCardClick}
      />
  );

  const titlesCards = property.find(`.place-card__name a`);

  titlesCards.forEach((titleClick) => {
    titleClick.simulate(`click`);
  });

  expect(titleCardClick).toHaveBeenCalledTimes(titlesCards.length);
});

