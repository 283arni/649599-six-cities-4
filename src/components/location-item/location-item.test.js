import * as React from 'react';
import renderer from 'react-test-renderer';
import LocationItem from './location-item';
import {offers} from '../../mocks/test/offers';

const onCityClick = jest.fn();
const onActiveChange = jest.fn();

it(`check render LocationItem`, () => {
  const tree = renderer.create(
      <LocationItem
        currentCity={offers[0].city.name}
        onCityClick={onCityClick}
        onActiveChange={onActiveChange}
        activeItem={offers[0].city.name}
        city={offers[0].city.name}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
