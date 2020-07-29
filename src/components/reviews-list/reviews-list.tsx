import * as React from 'react';
import Review from '../review/review';
import {cutReviews} from '../../utils';
import {reviewType} from '../../types/reviews';

interface Props {
  reviews: reviewType[];
}

const ReviewsList: React.FunctionComponent<Props> = ({reviews}: Props) => {

  const newReviews = cutReviews(reviews);

  return (
    <ul className="reviews__list">
      {newReviews.map((review) =>
        <Review
          key={review.id}
          review={review}
        />)
      }
    </ul>
  );
};


export default ReviewsList;
