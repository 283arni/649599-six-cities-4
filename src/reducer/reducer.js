import {offers} from '../mocks/data/offers';
import {reviews} from '../mocks/data/reviews';
import {extend} from '../utils';

// const startCity = offers[0].city.name;

const initialState = {
  // currentCity: startCity,
  offers,
  reviews,
  offer: null,
  // hoverOffer: null,
  sortType: `Popular`
};

const ActionType = {
  CHOOSE_CITY: `CHOOSE_CITY`,
  SET_OFFER: `SET_OFFER`,
  SET_OFFER_HOVER: `SET_OFFER_HOVER`,
  SET_SORT_TYPE: `SET_SORT_TYPE`
};

const ActionCreator = {
  setOffer: (offer) => ({
    type: ActionType.SET_OFFER,
    payload: offer
  }),
  setHoverOffer: (offer) => ({
    type: ActionType.SET_OFFER_HOVER,
    payload: offer
  }),
  changeCurrentCity: (city) => ({
    type: ActionType.CHOOSE_CITY,
    payload: city
  }),
  setSortType: (valueType) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: valueType
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHOOSE_CITY:
      return extend(state, {
        currentCity: action.payload
      });
    case ActionType.SET_OFFER:
      return extend(state, {
        offer: action.payload
      });
    case ActionType.SET_OFFER_HOVER:
      return extend(state, {
        hoverOffer: action.payload
      });
    case ActionType.SET_SORT_TYPE:
      return extend(state, {
        sortType: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, initialState};
