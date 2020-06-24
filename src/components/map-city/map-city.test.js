import React from 'react';
import renderer from 'react-test-renderer';
import MapCity from './map-city';
import {offers} from '../../mocks/test/offers';


jest.mock(`leaflet`, () => ({
  icon: jest.fn(),
  map: jest.fn().mockReturnValue({
    setView: jest.fn(),
    remove: jest.fn()
  }),
  tileLayer: jest.fn().mockReturnValue({
    addTo: jest.fn()
  }),
  marker: jest.fn().mockReturnValue({
    addTo: jest.fn()
  }),
}));

it(`check render MapCity`, () => {
  const component = renderer.create(
      <MapCity
        offers={offers}
      />, {
        createNodeMock: () => document.createElement(`div`)
      }
  ).toJSON();

  expect(component).toMatchSnapshot();
});