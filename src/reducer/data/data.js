import {extend} from '../../utils';

const initialState = {
  offers: [],
  reviews: [],
  nearOffers: [],
  favoriteOffers: [],
  messageServer: null,
  isBlocked: false
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_NEAR_OFFERS: `GET_NEAR_OFFERS`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  LOAD_MESSAGE_SERVER: `LOAD_MESSAGE_SERVER`,
  BLOCKED_FORM: `BLOCKED_FORM`
};

const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews
  }),
  loadNearOffers: (nearOffers) => ({
    type: ActionType.LOAD_NEAR_OFFERS,
    payload: nearOffers
  }),
  loadFavoriteOffers: (offers) => ({
    type: ActionType.LOAD_FAVORITE_OFFERS,
    payload: offers
  }),
  loadMessageServer: (message) => ({
    type: ActionType.LOAD_MESSAGE_SERVER,
    payload: message
  }),
  setBlocking: (value) => ({
    type: ActionType.BLOCKED_FORM,
    payload: value
  })
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
        return response.data[0].city.name;
      });
  },
  loadReviews: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
      });
  },
  loadNearOffers: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        dispatch(ActionCreator.loadNearOffers(response.data));
      });
  },
  sendReview: (id, review) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setBlocking(true));

    return api.post(`/comments/${id}`, review)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
        dispatch(ActionCreator.loadMessageServer(response));
        dispatch(ActionCreator.setBlocking(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.setBlocking(false));

        throw err;
      });
  },
  loadFavoriteOffers: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavoriteOffers(response.data));
      });
  },
  setFavoriteOffer: (id, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/${+!status}`)
      .then(() => {
        dispatch(Operation.loadOffers());
        dispatch(Operation.loadFavoriteOffers());
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload
      });
    case ActionType.LOAD_NEAR_OFFERS:
      return extend(state, {
        nearOffers: action.payload
      });
    case ActionType.LOAD_MESSAGE_SERVER:
      return extend(state, {
        messageServer: action.payload
      });
    case ActionType.BLOCKED_FORM:
      return extend(state, {
        isBlocked: action.payload
      });
    case ActionType.LOAD_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOffers: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, initialState, Operation};
