import React from 'react';
import renderer from 'react-test-renderer';
import LocationsList from './locations-list';
import {offer} from '../../mocks/test/offers';
import {listCities} from '../../mocks/test/locations-list';

const onCityClick = jest.fn();

it(`check render LocationsList`, () => {
  const tree = renderer.create(
      <LocationsList
        currentCity={offer.city.name}
        cities={listCities}
        onCityClick={onCityClick}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
