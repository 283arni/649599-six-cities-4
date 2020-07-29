import * as React from 'react';
import MapCity from '../map-city/map-city';
import {sortOffers} from '../../utils';
import Sorting from '../sorting/sorting';
import withSorting from '../../hocs/with-sorting/with-sorting';
import ListOffers from '../list-offers/list-offers';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {offerType} from '../../types/offers';
import {userType} from '../../types/user';
const ListOffersWrapper = withActiveItem(ListOffers);
const SortingWrapper = withSorting(Sorting);

interface Props {
  currentOffers: offerType[];
  onTitleCardClick: () => void;
  onCardHover: () => void;
  currentCity: string;
  hoverOffer: offerType;
  sortType: string;
  onSortChange: () => void;
  onFavoriteOfferClick: () => void;
  user: userType;
}

const ScreenCity: React.FunctionComponent<Props> = (props: Props) => {
  const {currentCity, sortType, onSortChange, onTitleCardClick, onCardHover, hoverOffer, currentOffers, onFavoriteOfferClick, user} = props;


  return (
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
          onFavoriteOfferClick={onFavoriteOfferClick}
          className={`cities__places-list`}
          user={user}
        />
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <MapCity
            offers={currentOffers}
            offer={hoverOffer}
          />
        </section>
      </div>
    </div>
  );
};


export default ScreenCity;
