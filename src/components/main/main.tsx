import * as React from 'react';
import LocationsList from '../locations-list/locations-list';
import {offerType} from '../../types/offers';
import {userType} from '../../types/user';
import NoOffers from '../no-offers/no-offers';
import ErrorMessage from '../error-message/error-message';
import Header from '../header/header';
import ScreenCity from '../screen-city/screen-city';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {filterList, getCities} from '../../utils';
import {ResponseStatus} from '../../const';
import {messageType} from '../../types/message';


const LocationsListWrapper = withActiveItem(LocationsList);

interface Props {
  offers: offerType[];
  currentCity: string;
  onCityClick: () => void;
  user: userType;
  onTitleCardClick: () => void;
  hoverOffer: offerType;
  onCardHover: () => void;
  sortType: string;
  onSortChange: () => void;
  onFavoriteOfferClick: () => void;
  messageServer: messageType;
}

const Main: React.FunctionComponent<Props> = (props: Props) => {
  const {offers, currentCity, onCityClick, user, messageServer} = props;
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
      {messageServer && messageServer.status === ResponseStatus.ERROR ?
        <ErrorMessage
          messageServer={messageServer}
        />
        : null}
    </div>
  );

};


export default Main;
