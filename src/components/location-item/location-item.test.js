import React from 'react';
import renderer from 'react-test-renderer';
import LocationItem from './location-item';
import {offer} from '../../mocks/test/offers';

const onCityClick = jest.fn();
const onActiveChange = jest.fn();

it(`check render LocationItem`, () => {
  const tree = renderer.create(
      <LocationItem
        currentCity={offer.city.name}
        onCityClick={onCityClick}
        onActiveChange={onActiveChange}
        activeItem={offer.city.name}
        city={offer.city}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
