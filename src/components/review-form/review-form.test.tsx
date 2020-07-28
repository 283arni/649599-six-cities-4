import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ReviewForm from './review-form';
import {messageServer} from '../../mocks/test/message';

const onSubmit = jest.fn();
const onReviewFormChange = jest.fn();


it(`check render ReviewForm`, () => {
  const tree = renderer.create(
      <ReviewForm
        messageServer={messageServer}
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
