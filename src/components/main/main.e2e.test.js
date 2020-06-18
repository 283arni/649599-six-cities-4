import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";
import {offers} from '../../mocks/test/offers';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`click on title cards`, () => {
  const onHoverCard = jest.fn();
  const onTitleCardClick = jest.fn();

  const main = shallow(
      <Main
        housingCount={offers.length}
        offers={offers}
        titleCardHandler={onTitleCardClick}
        onHover={onHoverCard}
      />
  );

  const titlesCards = main.find(`place-card__name a`);

  titlesCards.forEach((titleCard) => {
    titleCard.simulate(`click`);
  });

  expect(onTitleCardClick).toHaveBeenCalledTimes(titlesCards.length);
});
