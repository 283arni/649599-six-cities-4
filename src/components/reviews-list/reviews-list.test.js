import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list';
import {reviews} from '../../mocks/test/reviews';


it(`check render ReviewsList`, () => {
  const tree = renderer.create(
      <ReviewsList
        reviews={reviews}
      />
  );

  expect(tree).toMatchSnapshot();
});
