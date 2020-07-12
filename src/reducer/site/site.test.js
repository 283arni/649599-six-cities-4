import {reducer, ActionCreator, ActionType, initialState} from "./site";
import {offers} from '../../mocks/test/offers';

const cityTest = `Paris`;
const sortTest = `Popular`;


describe(`test work Reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change currentCity`, () => {
    expect(reducer({
      currentCity: `Amsterdam`,
    }, {
      type: ActionType.CHOOSE_CITY,
      payload: cityTest
    })).toEqual({
      currentCity: cityTest
    });
  });

  it(`Reducer should change offer`, () => {
    expect(reducer({
      offer: null,
    }, {
      type: ActionType.SET_OFFER,
      payload: offers[0]
    })).toEqual({
      offer: offers[0]
    });
  });

  it(`Reducer should change hover offer`, () => {
    expect(reducer({
      hoverOffer: null,
    }, {
      type: ActionType.SET_OFFER_HOVER,
      payload: offers[0]
    })).toEqual({
      hoverOffer: offers[0]
    });
  });

  it(`Reducer should change type sort`, () => {
    expect(reducer({
      sortType: `type`,
    }, {
      type: ActionType.SET_SORT_TYPE,
      payload: sortTest
    })).toEqual({
      sortType: sortTest
    });
  });
});


describe(`test work Action Creators`, () => {
  it(`Action creator for set offer returns correct action`, () => {
    expect(ActionCreator.setOffer(offers[0])).toEqual({
      type: ActionType.SET_OFFER,
      payload: offers[0],
    });
  });

  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCurrentCity(cityTest)).toEqual({
      type: ActionType.CHOOSE_CITY,
      payload: cityTest,
    });
  });

  it(`Action creator for set hover offer returns correct action`, () => {
    expect(ActionCreator.setHoverOffer(cityTest)).toEqual({
      type: ActionType.SET_OFFER_HOVER,
      payload: cityTest,
    });
  });

  it(`Action creator for set sort type returns correct action`, () => {
    expect(ActionCreator.setSortType(sortTest)).toEqual({
      type: ActionType.SET_SORT_TYPE,
      payload: sortTest,
    });
  });
});
