import React from 'react';
import PropTypes from 'prop-types';
import LocationItem from '../location-item/location-item';
import {MAX_RENDER_CITY} from '../../const';


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
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default LocationsList;
