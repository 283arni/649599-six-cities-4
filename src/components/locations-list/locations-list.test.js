import React from 'react';
import renderer from 'react-test-renderer';
import LocationsList from './locations-list';
import {offer} from '../../mocks/test/offers';
import {cities} from '../../mocks/test/cities';

const onCityClick = jest.fn();
const onActiveChange = jest.fn();

it(`check render LocationsList`, () => {
  const tree = renderer.create(
      <LocationsList
        currentCity={offer.city.name}
        cities={cities}
        onCityClick={onCityClick}
        onActiveChange={onActiveChange}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
