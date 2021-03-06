import * as React from 'react';
import * as renderer from 'react-test-renderer';
import NoOffers from './no-offers';


it(`check render NoOffers`, () => {
  const tree = renderer.create(
      <NoOffers
        currentCity={`Amsterdam`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
