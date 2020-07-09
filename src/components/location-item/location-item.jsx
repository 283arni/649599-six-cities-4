import React from 'react';
import PropTypes from 'prop-types';

const LocationItem = ({onCityClick, city, activeItem, onActiveChange, currentCity}) => {

  return (
    <li
      className="locations__item"
    >
      <a
        className={`locations__item-link tabs__item ${(activeItem || currentCity) === city ? `tabs__item--active` : ``}`}
        href="#"
        onClick={() => {
          onActiveChange(city);
          onCityClick(city);
        }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
};

LocationItem.propTypes = {
  currentCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onActiveChange: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
  city: PropTypes.string.isRequired,
};

export default LocationItem;
