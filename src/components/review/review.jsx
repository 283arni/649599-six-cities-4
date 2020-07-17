import React from 'react';
import {reviewType} from '../../types/reviews';
import {reviewDefault} from '../../mocks/data/reviews';
import {getDate} from '../../utils';
import {ONE_STAR} from '../../const';

const Review = ({review}) => {

  const date = getDate(review.date);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatar} width="54" height="54" alt={review.user.name} />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(review.rating) * ONE_STAR}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime={date}>{date}</time>
      </div>
    </li>
  );
};

Review.propTypes = reviewType;
Review.defaultProps = reviewDefault;

export default Review;
