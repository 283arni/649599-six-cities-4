import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import NoFavorites from '../no-favorites/no-favorites';
import {favoriteOfferType} from '../../types/offers';
import {userType} from '../../types/user';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';


const Favorites = (props) => {
  const {favoriteOffers, user} = props;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={user.mail ? AppRoute.MAIN : AppRoute.LOGIN}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{user ? user.mail : `Sign in`}</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {favoriteOffers.length ?
        <Fragment>
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {favoriteOffers.map((item, i) =>
                    <li className="favorites__locations-items" key={item + i}>
                      <div className="favorites__locations locations locations--current" >
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{item.city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {item.offers.map((offer) =>
                          <Card
                            {...props}
                            key={offer.id}
                            offer={offer}
                            className={`favorites__card`}
                            onActiveChange={() => {}}
                          />
                        )}
                      </div>
                    </li>
                  )}
                </ul>
              </section>
            </div>
          </main>
          <footer className="footer container">
            <Link
              className="footer__logo-link"
              to={AppRoute.MAIN}
            >
              <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
            </Link>
          </footer>
        </Fragment> : <NoFavorites />}
    </div>
  );
};

Favorites.propTypes = {
  favoriteOffers: PropTypes.arrayOf(
      PropTypes.shape(favoriteOfferType).isRequired
  ).isRequired,
  user: PropTypes.shape(userType)
};

export default Favorites;
