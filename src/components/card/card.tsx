import * as React from 'react';
import {offerType} from '../../types/offers';
import {userType} from '../../types/user';
import {Link} from 'react-router-dom';
import {AppRoute, ONE_STAR} from '../../const';
import {getCurrentName} from '../../utils';

interface Props {
  offer: offerType;
  onTitleCardClick: (offer: offerType) => void;
  onCardHover: (offer: offerType) => void;
  className: string;
  onActiveChange: (offer: offerType) => void;
  activeItem: offerType | string;
  onFavoriteOfferClick: (id: number, favorite: boolean) => void;
  user: userType;
}

const Card: React.FunctionComponent<Props> = (props: Props) => {
  const {offer, onTitleCardClick, onCardHover, className, onActiveChange, onFavoriteOfferClick, user} = props;
  const {photo, premium, price, title, type, rating, favorite, id} = offer;

  const currentName = getCurrentName(className);

  return (
    <article
      className={`${className} place-card`}
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
          <Link
            className={`place-card__bookmark-button ${favorite ? `place-card__bookmark-button--active` : ``} button`}
            to={user ? {} : AppRoute.LOGIN}
            onClick={user ? () => onFavoriteOfferClick(id, favorite) : null}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </Link>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * ONE_STAR}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={`${AppRoute.OFFER}/${offer.id}`}
            onClick={() => onTitleCardClick(offer)}
          >{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};


export default Card;
