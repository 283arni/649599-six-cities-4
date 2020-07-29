import * as React from 'react';
import {offerType} from '../../types/offers';
import {reviewType} from '../../types/reviews';
import {userType} from '../../types/user';
import {messageType} from '../../types/message';
import ReviewsList from '../reviews-list/reviews-list';
import MapCity from '../map-city/map-city';
import ListOffers from '../list-offers/list-offers';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withReviewForm from '../../hocs/with-review-form/with-review-form';
import {housingType, ONE_STAR, ResponseStatus, AppRoute} from '../../const';
import ReviewForm from '../review-form/review-form';
import Header from '../header/header';
import {Link} from 'react-router-dom';
import ErrorMessage from '../error-message/error-message';

const ListOffersWrapper = withActiveItem(ListOffers);
const ReviewFormWrapper = withReviewForm(ReviewForm);


interface Props {
  offer: offerType;
  onTitleCardClick: () => void;
  reviews: reviewType[];
  messageServer: messageType;
  nearOffers: offerType[];
  onCardHover: () => void;
  user: userType;
  onReviewSubmit: () => void;
  isBlocked: boolean;
  onFavoriteOfferClick: (id: number, favorite: boolean) => void;
}

const Property: React.FunctionComponent<Props> = (props: Props) => {

  const {offer, onTitleCardClick, reviews, nearOffers, onCardHover, user, onReviewSubmit, messageServer, isBlocked, onFavoriteOfferClick} = props;
  const {photos, title, description, premium, type, rating, amountBedrooms, maxGustes, price, things, owner, id, favorite} = offer;

  return (
    <div className="page">
      <Header
        user={user}
      />
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
                <Link
                  className={`property__bookmark-button ${favorite ? `property__bookmark-button--active` : ``} button`}
                  onClick={user ? () => onFavoriteOfferClick(id, favorite) : null}
                  to={user ? {} : AppRoute.LOGIN}
                >
                  <svg className="place-card__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </Link>
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
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <ListOffersWrapper
              offers={nearOffers}
              onTitleCardClick={onTitleCardClick}
              onCardHover={onCardHover}
              className={`near-places__list`}
              onFavoriteOfferClick={onFavoriteOfferClick}
              user={user}
            />
          </section>
        </div>
      </main>
      {messageServer && messageServer.status === ResponseStatus.ERROR ?
        <ErrorMessage
          messageServer={messageServer}
        />
        : null}
    </div>
  );
};


export default Property;
