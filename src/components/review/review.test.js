import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review';
import {reviews} from '../../mocks/test/reviews';


it(`check render Review`, () => {
  const tree = renderer.create(
      <Review
        review={reviews[0]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
