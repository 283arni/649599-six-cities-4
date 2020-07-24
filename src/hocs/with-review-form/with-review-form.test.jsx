import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';
import withReviewForm from './with-review-form';
import {offers} from '../../mocks/test/offers';

Enzyme.configure({
  adapter: new Adapter()
});

const onReviewSubmit = jest.fn();

const Form = ({onReviewFormChange, onSubmit}) => {

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          onChange={onReviewFormChange}
          checked={false}
          disabled={false}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="Perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value=""
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onReviewFormChange}
        disabled={false}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={false}>Submit</button>
      </div>
    </form>
  );
};

Form.propTypes = {
  onReviewFormChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};


describe(`change activ item through withReviewForm`, () => {
  it(`change active item in ReviewFormWrapper`, () => {
    const ReviewFormWrapper = withReviewForm(Form);
    const component = Enzyme.mount(<ReviewFormWrapper offer={offers[0]} onReviewSubmit={onReviewSubmit}/>);

    component.find(`.form__rating-input`).simulate(`change`);
    component.find(`.reviews__textarea`).simulate(`change`);

    expect(component.instance().state).toStrictEqual({
      review: ``,
      rating: `5`,
      isActive: false
    });
  });
});
