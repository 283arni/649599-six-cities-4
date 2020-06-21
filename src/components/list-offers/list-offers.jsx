import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import {offerType} from '../../types/offers';

const ListOffers = (props) => {

  const {offers, onTitleCardClick, onCardHover} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <Card
          key={offer.id}
          offer={offer}
          onTitleCardClick={onTitleCardClick}
          onCardHover={onCardHover}
        />
      )}
    </div>
  );
};

ListOffers.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offerType).isRequired
  ),
  onTitleCardClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired
};

export default ListOffers;
