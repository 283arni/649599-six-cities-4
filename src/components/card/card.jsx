import React from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offers';
import {NameBlockCards} from '../../mocks/data/const';

const Card = (props) => {

  const {offer, onTitleCardClick, onCardHover, nameBlockCards} = props;
  const {photos, premium, price, title, type, rating} = offer;
  const currentName = nameBlockCards === NameBlockCards.NEAR ? `near-places__card` : `cities__place-card`;

  return (
    <article
      className={`${currentName} place-card`}
      onMouseOver={() => onCardHover(offer)}
    >
      {premium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null
      }
      <div className={`${nameBlockCards}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={photos[0]} width="260" height="200" alt={title} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a
            href="#"
            onClick={() => onTitleCardClick(offer)}
          >{title}</a>
        </h2>
        <p className="place-card__type">{Object.values(type)}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offer: PropTypes.shape(offerType).isRequired,
  onTitleCardClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  nameBlockCards: PropTypes.string.isRequired
};

export default Card;
