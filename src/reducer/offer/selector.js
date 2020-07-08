import NameSpace from '../name-space';

export const getCity = (state) => {
  return state[NameSpace.OFFER].currentCity;
};

export const getOffer = (state) => {
  return state[NameSpace.OFFER].offer;
};

export const getHoverOffer = (state) => {
  return state[NameSpace.OFFER].hoverOffer;
};

export const getSortType = (state) => {
  return state[NameSpace.OFFER].sortType;
};
