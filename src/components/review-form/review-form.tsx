import * as React from 'react';
import {radioStars} from '../../const';
import {messageType} from '../../types/message';

interface Props {
  onSubmit: () => void;
  onReviewFormChange: () => void;
  review: string;
  rating: string | number;
  isActive: boolean;
  messageServer: messageType;
  isBlocked: boolean;
}

const ReviewForm: React.FunctionComponent<Props> = (props: Props) => {
  const {onSubmit, onReviewFormChange, review, rating, isActive, isBlocked} = props;
  const stars = Object.entries(radioStars);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars.map(([title, popularity]) => (
          <React.Fragment key={title + popularity}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={popularity}
              id={`${popularity}-stars`}
              type="radio"
              onChange={onReviewFormChange}
              checked={popularity === rating}
              disabled={isBlocked}
            />
            <label htmlFor={`${popularity}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>)
        )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={review}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onReviewFormChange}
        disabled={isBlocked}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isActive || isBlocked}>Submit</button>
      </div>
    </form>
  );
};


export default ReviewForm;
