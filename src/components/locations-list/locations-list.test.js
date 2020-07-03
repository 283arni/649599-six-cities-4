import React from 'react';
import renderer from 'react-test-renderer';
import LocationsList from './locations-list';
import {offer, offers} from '../../mocks/test/offers';

const onCityClick = jest.fn();
const onActiveChange = jest.fn();

it(`check render LocationsList`, () => {
  const tree = renderer.create(
      <LocationsList
        currentCity={offer.city.name}
        offers={offers}
        onCityClick={onCityClick}
        onActiveChange={onActiveChange}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
