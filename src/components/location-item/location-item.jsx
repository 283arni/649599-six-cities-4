import React from 'react';
import PropTypes from 'prop-types';
import {cityType} from '../../types/city';

const LocationItem = ({onCityClick, city, activeItem, onActiveChange, currentCity}) => {

  return (
    <li
      className="locations__item"
    >
      <a
        className={`locations__item-link tabs__item ${(activeItem || currentCity) === city.name ? `tabs__item--active` : ``}`}
        href="#"
        onClick={() => {
          onActiveChange(city.name);
          onCityClick(city.name);
        }}
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
};

LocationItem.propTypes = {
  currentCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onActiveChange: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
  city: cityType
};

export default LocationItem;
