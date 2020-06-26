import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import {offerType} from '../../types/offers';
import {TypeSection} from '../../mocks/data/const';

const ListOffers = (props) => {

  const {offers, onTitleCardClick, onCardHover, typeSection} = props;
  const tabsContent = typeSection === TypeSection.CITIES ? `tabs__content` : ``;
  const mainClass = typeSection === TypeSection.NEAR ? `near-places__list` : `cities__places-list`;

  return (
    <div className={`${mainClass} places__list ${tabsContent}`}>
      {offers.map((offer) =>
        <Card
          typeSection={typeSection}
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
  onCardHover: PropTypes.func.isRequired,
  typeSection: PropTypes.string.isRequired
};

export default ListOffers;
