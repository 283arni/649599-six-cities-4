import React from 'react';
import PropTypes from 'prop-types';
import LocationsList from '../locations-list/locations-list';
import {offerType} from '../../types/offers';
import {userType} from '../../types/user';
import NoOffers from '../no-offers/no-offers';
import ScreenCity from '../screen-city/screen-city';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {filterList, getCities} from '../../utils';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const LocationsListWrapper = withActiveItem(LocationsList);


const Main = (props) => {
  const {offers, currentCity, onCityClick, user} = props;
  const currentOffers = filterList(offers, currentCity);
  const cities = getCities(offers);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={user ? AppRoute.FAVORITES : AppRoute.LOGIN}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{user ? user.name : `Sign in`}</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
