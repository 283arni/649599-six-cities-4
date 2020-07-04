import React from 'react';
import PropTypes from 'prop-types';
import LocationItem from '../location-item/location-item';
import {MAX_RENDER_CITY} from '../../mocks/data/const';
import {cityType} from '../../types/city';


const LocationsList = (props) => {
  const {cities} = props;
  const citiesList = cities.slice(0, MAX_RENDER_CITY);

  return (
    <ul className="locations__list tabs__list">
      {citiesList.map((city, i) => (
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
  cities: PropTypes.arrayOf(cityType).isRequired
};

export default LocationsList;
