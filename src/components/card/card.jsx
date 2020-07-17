import React from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offers';
import {NameBlockCards} from '../../const';
import {ONE_STAR} from '../../const';

const Card = (props) => {

  const {offer, onTitleCardClick, onCardHover, className, onActiveChange, activeItem} = props;
  const {photo, premium, price, title, type, rating} = offer;
  const currentClass = className.search(NameBlockCards.NEAR) ? `cities__place-card` : `near-places__card`;
  const currentName = className.search(NameBlockCards.NEAR) ? NameBlockCards.CITIES : NameBlockCards.NEAR;

  return (
    <article
      className={`${currentClass} place-card`}
      onMouseOver={() => {
        onActiveChange(offer);
        onCardHover(offer);
      }}
    >
      {premium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null
      }
      <div className={`${currentName}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={photo} width="260" height="200" alt={title} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${activeItem === offer ? `place-card__bookmark-button--active` : ``} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * ONE_STAR}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a
            href="#"
            onClick={() => onTitleCardClick(offer)}
          >{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offer: PropTypes.shape(offerType).isRequired,
  onTitleCardClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  onActiveChange: PropTypes.func.isRequired,
  activeItem: PropTypes.shape(offerType),
};

export default Card;
