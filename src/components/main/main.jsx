import React from 'react';
import PropTypes from 'prop-types';
import LocationsList from '../locations-list/locations-list';
import {offerType} from '../../types/offers';
import {userType} from '../../types/user';
import NoOffers from '../no-offers/no-offers';
import Header from '../header/header';
import ScreenCity from '../screen-city/screen-city';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {filterList, getCities} from '../../utils';

const LocationsListWrapper = withActiveItem(LocationsList);


const Main = (props) => {
  const {offers, currentCity, onCityClick, user} = props;
  const currentOffers = filterList(offers, currentCity);
  const cities = getCities(offers);

  return (
    <div className="page page--gray page--main">
      <Header
        user={user}
      />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsListWrapper
              currentCity={currentCity}
              cities={cities}
              onCityClick={onCityClick}
            />
          </section>
        </div>
        <div className="cities">
          {currentOffers.length ?
            <ScreenCity
              {...props}
              currentOffers={currentOffers}
            /> :
            <NoOffers
              currentCity={currentCity}
            />
          }
        </div>
      </main>
    </div>
  );

};

Main.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offerType)
  ),
  currentCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
  user: PropTypes.shape(userType)
};

export default Main;
