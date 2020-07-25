import * as React from 'react';
import renderer from 'react-test-renderer';
import ReviewForm from './review-form';
import {offers} from '../../mocks/test/offers';

const onReviewSubmit = jest.fn();
const onSubmit = jest.fn();
const onReviewFormChange = jest.fn();

const message = {
  status: 200,
  data: {}
};

it(`check render ReviewForm`, () => {
  const tree = renderer.create(
      <ReviewForm
        offer={offers[0]}
        onReviewSubmit={onReviewSubmit}
        messageServer={message}
        isBlocked={false}
        onReviewFormChange={onReviewFormChange}
        onSubmit={onSubmit}
        review={``}
        rating={0}
        isActive={false}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
