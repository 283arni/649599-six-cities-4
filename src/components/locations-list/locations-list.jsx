import React from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offers';
import LocationItem from '../location-item/location-item';
import {MAX_RENDER_CITY} from '../../mocks/data/const';

const LocationsList = (props) => {
  const {offers} = props;
  const cities = offers.map((offert) => offert.city).slice(0, MAX_RENDER_CITY);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => (
        <LocationItem
          {...props}
          key={city + i}
          city={city}
        />
      ))}
    </ul>
  );
};

LocationsList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offerType).isRequired
  ),
};

export default LocationsList;
