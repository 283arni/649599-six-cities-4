import NameSpace from '../name-space';

export const getCity = (state) => {
  return state[NameSpace.SITE].currentCity;
};

export const getOffer = (state) => {
  return state[NameSpace.SITE].offer;
};

export const getHoverOffer = (state) => {
  return state[NameSpace.SITE].hoverOffer;
};

export const getSortType = (state) => {
  return state[NameSpace.SITE].sortType;
};
