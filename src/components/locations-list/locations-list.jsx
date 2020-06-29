import React from 'react';
import PropTypes from 'prop-types';
import {cityType} from '../../types/city';

const LocationsList = ({cities, currentCity, onCityClick}) => {

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => (
        <li
          key={city.name + i}
          className="locations__item"
        >
          <a
            className={`locations__item-link tabs__item ${currentCity === city.name ? `tabs__item--active` : ``}`}
            href="#"
            onClick={() => onCityClick(city.name)}
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

LocationsList.propTypes = {
  cities: PropTypes.arrayOf(cityType).isRequired,
  currentCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired
};

export default LocationsList;
