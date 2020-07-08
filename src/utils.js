import {TypeSortOffers} from './mocks/data/const';

export const extend = (oldData, newData) => {
  return Object.assign({}, oldData, newData);
};

export const sortOffers = (currentOffers, sortType) => {
  switch (sortType) {
    case TypeSortOffers.PRICE_HIGH:
      return currentOffers.sort((a, b) => b.price - a.price);
    case TypeSortOffers.PRICE_LOW:
      return currentOffers.sort((a, b) => a.price - b.price);
    case TypeSortOffers.TOP:
      return currentOffers.sort((a, b) => b.rating - a.rating);
  }

  return currentOffers;
};

export const filterList = (offers, city) => {
  return offers.filter((offer) => offer.city.name === city);
};

