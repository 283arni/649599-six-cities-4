import {reducer, ActionCreator, ActionType, initialState, Operation} from "./data";
import {createApi} from '../../api';
import MockAdapter from "axios-mock-adapter";
import {offers} from '../../mocks/test/offers';
import {reviews} from '../../mocks/test/reviews';

const api = createApi(() => {});

describe(`test work Reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change offers`, () => {
    expect(reducer({
      offers: [],
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: offers
    })).toEqual({
      offers
    });
  });

  it(`Reducer should change reviews`, () => {
    expect(reducer({
      reviews: [],
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews
    })).toEqual({
      reviews
    });
  });

  it(`Reducer should change near offer`, () => {
    expect(reducer({
      nearOffers: [],
    }, {
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: offers
    })).toEqual({
      nearOffers: offers
    });
  });
});


describe(`test work Action Creators`, () => {
  it(`Action creator for offers returns correct action`, () => {
    expect(ActionCreator.loadOffers(offers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    });
  });

  it(`Action creator for reviews returns correct action`, () => {
    expect(ActionCreator.loadReviews(reviews)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    });
  });

  it(`Action creator for nearOffers offer returns correct action`, () => {
    expect(ActionCreator.loadNearOffers(offers)).toEqual({
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: offers,
    });
  });
});

describe(`test work Operation`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, offers);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: offers,
        });
      });
  });

  it(`Should make a correct API call to /hotels/nearby`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersNearLoader = Operation.loadNearOffers(3);

    apiMock
      .onGet(`/hotels/3/nearby`)
      .reply(200, [{fake: true}]);

    return offersNearLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEAR_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /comments`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = Operation.loadReviews(3);

    apiMock
      .onGet(`/comments/3`)
      .reply(200, [{fake: true}]);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });
});
