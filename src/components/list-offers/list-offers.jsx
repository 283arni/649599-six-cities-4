import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import {offerType} from '../../types/offers';
import {NameBlockCards} from '../../const';


const ListOffers = (props) => {
  const {offers, className} = props;
  const tabsContent = className.includes(NameBlockCards.CITIES) ? `` : `tabs__content`;
  const currentClass = className.includes(NameBlockCards.CITIES) ? `cities__place-card` : `near-places__card`;

  return (
    <div className={`${className} places__list ${tabsContent}`}>
      {offers.map((offer) =>
        <Card
          {...props}
          offer={offer}
          key={offer.id}
          className={currentClass}
        />
      )}
    </div>
  );
};

ListOffers.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offerType).isRequired
  ),
  className: PropTypes.string.isRequired
};

export default ListOffers;
