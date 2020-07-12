import {extend} from '../../utils';

const initialState = {
  offer: null,
  hoverOffer: null,
  sortType: `Popular`,
  currentCity: ``,
};

const ActionType = {
  SET_OFFER: `SET_OFFER`,
  SET_OFFER_HOVER: `SET_OFFER_HOVER`,
  SET_SORT_TYPE: `SET_SORT_TYPE`,
  CHOOSE_CITY: `CHOOSE_CITY`,
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
  setSortType: (valueType) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: valueType
  }),
  changeCurrentCity: (city) => ({
    type: ActionType.CHOOSE_CITY,
    payload: city
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    case ActionType.CHOOSE_CITY:
      return extend(state, {
        currentCity: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, initialState};
