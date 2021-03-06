import {createSelector} from 'reselect';
import OfferModel from '../../adapters/offer-model';
import ReviewModel from '../../adapters/review-model';
import NameSpace from "../name-space";
import {Slicer} from '../../const';
import {getOffersSortedCities, filterNearOffers} from '../../utils';

const getSelector = (state) => state[NameSpace.DATA];

export const getOffers = createSelector(
    getSelector,
    (state) => state.offers
);

export const getReviews = createSelector(
    getSelector,
    (state) => state.reviews
);

export const getNearOffers = createSelector(
    getSelector,
    (state) => state.nearOffers
);

export const getFavoriteOffers = createSelector(
    getSelector,
    (state) => state.favoriteOffers
);

export const getMessageServer = createSelector(
    getSelector,
    (state) => state.messageServer
);

export const getBlocking = createSelector(
    getSelector,
    (state) => state.isBlocked
);


export const getConvertOffers = createSelector(
    getOffers,
    (offers) => {
      return OfferModel.parseOffers(offers);
    }
);

export const getConvertNearOffers = createSelector(
    getNearOffers,
    (offers) => {
      return OfferModel.parseOffers(offers);
    }
);

export const getConvertReviews = createSelector(
    getReviews,
    (reviews) => {
      return ReviewModel.parseReviews(reviews);
    }
);

const getConvertFavoriteOffers = createSelector(
    getFavoriteOffers,
    (offers) => {
      return OfferModel.parseOffers(offers);
    }
);

export const getSortedFavoriteOffers = createSelector(
    getConvertFavoriteOffers,
    (offers) => {
      return getOffersSortedCities(offers);
    }
);

export const getFiltredNearOffers = createSelector(
    getConvertOffers,
    getConvertNearOffers,
    (offers, nearOffers) => {
      return filterNearOffers(offers, nearOffers).slice(0, Slicer.OFFERS);
    }
);

export const getReverseReviews = createSelector(
    getConvertReviews,
    (reviews) => {
      return reviews.reverse();
    }
);
