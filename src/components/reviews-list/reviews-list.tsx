import * as React from 'react';
import Review from '../review/review';
import {reviewType} from '../../types/reviews';

interface Props {
  reviews: reviewType[];
}

const ReviewsList: React.FunctionComponent<Props> = ({reviews}: Props) => {

  return (
    <ul className="reviews__list">
      {reviews.map((review) =>
        <Review
          key={review.id}
          review={review}
        />)
      }
    </ul>
  );
};

// ReviewsList.propTypes = {
//   reviews: PropTypes.arrayOf(
//       PropTypes.shape(reviewType).isRequired
//   ).isRequired
// };

export default ReviewsList;
