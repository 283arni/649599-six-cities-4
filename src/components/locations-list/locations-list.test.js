import React from 'react';
import renderer from 'react-test-renderer';
import LocationsList from './locations-list';
import {offer} from '../../mocks/test/offers';
import {listCities} from '../../mocks/test/locations-list';

it(`check render LocationsList`, () => {
  const tree = renderer.create(
      <LocationsList
        currentCity={offer.city.name}
        cities={listCities}
        onCityClick={jest.fn()}
      />
  );

  expect(tree).toMatchSnapshot();
});
