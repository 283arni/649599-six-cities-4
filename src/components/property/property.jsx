import React from 'react';
import {offerType} from '../../types/offers';
import {reviewType} from '../../types/reviews';
import {userType} from '../../types/user';
import PropTypes from 'prop-types';
import ReviewsList from '../reviews-list/reviews-list';
import MapCity from '../map-city/map-city';
import ListOffers from '../list-offers/list-offers';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withReviewForm from '../../hocs/with-review-form/with-review-form';
import {housingType, ONE_STAR} from '../../const';
import ReviewForm from '../review-form/review-form';

const ListOffersWrapper = withActiveItem(ListOffers);
const ReviewFormWrapper = withReviewForm(ReviewForm);

const Property = (props) => {
  const {offer, onTitleCardClick, reviews, nearOffers, onCardHover, user, onReviewSubmit, messageServer, isBlocked, onFavoriteOfferClick} = props;
  const {photos, title, description, premium, type, rating, amountBedrooms, maxGustes, price, things, owner} = offer;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{user.mail}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {photos.map((photo, i) =>
                <div
                  key={photo + i}
                  className="property__image-wrapper"
                >
                  <img className="property__image" src={photo} alt={title} />
                </div>)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {premium ? <div className="property__mark">
                <span>Premium</span>
              </div> : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${Math.round(rating) * ONE_STAR}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {housingType[type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {amountBedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxGustes} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {things.map((thing, i) =>
                    <li
                      key={thing + i}
                      className="property__inside-item"
                    >
                      {thing}
                    </li>
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${owner.super ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={owner.avatar} width="74" height="74" alt={owner.name} />
                  </div>
                  <span className="property__user-name">
                    {owner.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList
                  reviews={reviews}
                />
                {user ?
                  <ReviewFormWrapper
                    offer={offer}
                    onReviewSubmit={onReviewSubmit}
                    messageServer={messageServer}
                    isBlocked={isBlocked}
                  />
                  : null
                }
              </section>
            </div>
          </div>
          <section className="property__map map">
            <MapCity
              offers={nearOffers}
              offer={offer}
            />
          </section>
        </section>
        {nearOffers.length ? <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <ListOffersWrapper
              offers={nearOffers}
              onTitleCardClick={onTitleCardClick}
              onCardHover={onCardHover}
              className={`near-places__list`}
              onFavoriteOfferClick={onFavoriteOfferClick}
            />
          </section>
        </div> : null}
      </main>
      {messageServer && messageServer.status === 404 ?
        <div className="error" style={{
          minWidth: `300px`,
          fontSize: `1.5rem`,
          padding: `10px`,
          textAlign: `center`,
          color: `pink`,
          border: `2px solid pink`,
          borderRadius: `3px`,
          backgroundColor: `red`,
          position: `fixed`,
          zIndex: `100`,
          top: `20px`,
          left: `50%`,
          transform: `translateX(-50%)`
        }}
        >
          {`${messageServer.data.error} Status: ${messageServer.status}`}
        </div>
        : null}
    </div>
  );
};

Property.propTypes = {
  offer: PropTypes.shape(offerType),
  onTitleCardClick: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewType).isRequired
  ).isRequired,
  nearOffers: PropTypes.arrayOf(
      PropTypes.shape(offerType).isRequired
  ),
  onCardHover: PropTypes.func.isRequired,
  user: PropTypes.shape(userType),
  onReviewSubmit: PropTypes.func.isRequired,
  messageServer: PropTypes.object,
  isBlocked: PropTypes.bool.isRequired,
  onFavoriteOfferClick: PropTypes.func.isRequired
};

export default Property;
