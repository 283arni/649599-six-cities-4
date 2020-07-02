import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import {offerType} from '../../types/offers';
import {NameBlockCards} from '../../mocks/data/const';
import {filterList} from '../../utils';

const ListOffers = (props) => {

  const {offers, onTitleCardClick, onCardHover, nameBlockCards, currentCity} = props;
  const tabsContent = nameBlockCards === NameBlockCards.CITIES ? `tabs__content` : ``;
  const mainClass = nameBlockCards === NameBlockCards.NEAR ? `near-places__list` : `cities__places-list`;
  const currentOffers = filterList(offers, currentCity);

  return (
    <div className={`${mainClass} places__list ${tabsContent}`}>
      {currentOffers.map((offer) =>
        <Card
          nameBlockCards={nameBlockCards}
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
  nameBlockCards: PropTypes.string.isRequired
};

export default ListOffers;
