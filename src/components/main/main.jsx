import React from 'react';
import PropTypes from 'prop-types';
import ListOffers from '../list-offers/list-offers';
import LocationsList from '../locations-list/locations-list';
import Sorting from '../sorting/sorting';
import withSorting from '../../hocs/with-sorting/with-sorting';
import {offerType} from '../../types/offers';
import MapCity from '../map-city/map-city';
import {NameBlockCards} from '../../mocks/data/const';
import {sortOffers, filterList} from '../../utils';
import withActiveItem from '../../hocs/with-active-item/with-active-item';

const LocationsListWrapper = withActiveItem(LocationsList);
const ListOffersWrapper = withActiveItem(ListOffers);
const SortingWrapper = withSorting(Sorting);


const Main = (props) => {
  const {onTitleCardClick, offers, onCardHover, currentCity, onCityClick, hoverOffer, onSortChange, sortType} = props;

  const currentOffers = filterList(offers, currentCity);
  const cityOffers = currentOffers[0].city;

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
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
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
              offers={offers}
              onCityClick={onCityClick}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
              <SortingWrapper
                sortType={sortType}
                onSortChange={onSortChange}
              />
              <ListOffersWrapper
                offers={sortOffers(currentOffers, sortType)}
                onTitleCardClick={onTitleCardClick}
                onCardHover={onCardHover}
                nameBlockCards={NameBlockCards.CITIES}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <MapCity
                  offers={currentOffers}
                  cityOffers={cityOffers}
                  offer={hoverOffer}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

};

Main.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offerType).isRequired
  ),
  onTitleCardClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
  hoverOffer: PropTypes.shape(offerType),
  sortType: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired
};

export default Main;
