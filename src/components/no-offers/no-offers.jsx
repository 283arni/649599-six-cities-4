import React from 'react';
import PropTypes from 'prop-types';
import {SettingImage} from '../../const';


const NoOffers = ({currentCity}) => {

  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property availbale at the moment in {currentCity}</p>
        </div>
      </section>
      <div
        className="cities__right-section"
        style={{
          backgroundImage: `url(./img/no-places@2x.png)`,
          backgroundSize: `auto ${SettingImage.SIZE}%`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `right ${SettingImage.POSITION}%`,
        }}
      ></div>
    </div>
  );
};

NoOffers.propTypes = {
  currentCity: PropTypes.string.isRequired
};

export default NoOffers;
