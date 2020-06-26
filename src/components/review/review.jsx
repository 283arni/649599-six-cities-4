import React from 'react';
import {reviewTemplate} from '../../types/reviews';
import {reviewDefault} from '../../mocks/data/reviews';

const Review = ({review}) => {

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54" alt={review.name} />
        </div>
        <span className="reviews__user-name">
          {review.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(review.rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime={review.date.fullTime}>{review.date.cutedTime}</time>
      </div>
    </li>
  );
};

Review.propTypes = reviewTemplate;
Review.defaultProps = reviewDefault;

export default Review;
