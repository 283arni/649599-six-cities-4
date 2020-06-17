import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const {offer, titleCardHandler, onHover} = this.props;
    const {photo, premium, price, title, type, rating} = offer;


    return (
      <article
        className="cities__place-card place-card"
        onMouseOver={() => onHover(offer)}
      >
        {premium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> : null
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={photo} width="260" height="200" alt="Place image" />
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
              <span style={{width: rating * 2 + `0%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a
              href="#"
              onClick={titleCardHandler}
            >{title}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

Card.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }),
  titleCardHandler: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired
};

export default Card;
