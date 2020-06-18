import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import offerType from '../../types/offers';

const ListOffers = (props) => {

  const {offers, titleCardHandler, onHover} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <Card
          key={offer.id}
          offer={offer}
          titleCardHandler={titleCardHandler}
          onHover={onHover}
        />
      )}
    </div>
  );
};

ListOffers.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offerType).isRequired
  ),
  titleCardHandler: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired
};

export default ListOffers;
