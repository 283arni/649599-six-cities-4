import {createSelector} from 'reselect';
import OfferModel from '../../adapters/offer-model';
import NameSpace from "../name-space.js";


export const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

export const getReviews = (state) => {
  return state[NameSpace.DATA].reviews;
};

export const getNearOffers = (state) => {
  return state[NameSpace.DATA].nearOffers;
};

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
