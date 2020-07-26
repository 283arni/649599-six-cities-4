import * as React from 'react';
import Card from '../card/card';
import NoFavorites from '../no-favorites/no-favorites';
import {favoriteOfferType, offerType} from '../../types/offers';
import {userType} from '../../types/user';
import {Link} from 'react-router-dom';
import {AppRoute, NOOP} from '../../const';
import Header from '../header/header';

interface Props {
    favoriteOffers: favoriteOfferType[];
    user: userType;
    onTitleCardClick: (offer: offerType) => void;
    onCardHover: (offer: offerType) => void;
    activeItem: string;
    onFavoriteOfferClick: (id: number, favorite: boolean) => void;
}

const Favorites: React.FunctionComponent<Props> = (props: Props) => {
  const {favoriteOffers, user} = props;

  return (
    <div className="page">
      <Header
        user={user}
      />

      {favoriteOffers.length ?
        <React.Fragment>
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {favoriteOffers.map((item, i) =>
                    <li className="favorites__locations-items" key={`${item} + ${i}`}>
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
                            onActiveChange={NOOP}
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
        </React.Fragment> : <NoFavorites />}
    </div>
  );
};


export default Favorites;
