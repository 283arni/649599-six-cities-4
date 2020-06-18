import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";
import {Ads} from '../../mocks/test/const';
import {offers} from '../../mocks/test/offers';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`click on title cards`, () => {
  const onTitleCardClick = jest.fn();

  const main = shallow(
      <Main
        housingCount={Ads.HOUSING_COUNT}
        offers={offers}
        titleCardHandler={onTitleCardClick}
      />
  );

  const titlesCards = main.find(`place-card__name a`);

  titlesCards.forEach((titleCard) => {
    titleCard.simulate(`click`);
  });

  expect(onTitleCardClick).toHaveBeenCalledTimes(titlesCards.length);
});
