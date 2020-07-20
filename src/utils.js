import {TypeSortOffers, NameBlockCards} from './const';


const monthNames = [`January`, `February`, `March`, `April`, `May`, `June`,
  `July`, `August`, `September`, `October`, `November`, `December`
];


export const getDate = (date) => {
  const dateNow = new Date(date);
  return `${monthNames[dateNow.getMonth()]} ${dateNow.getFullYear()}`;
};

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

export const getCities = (offers) => {
  let cities = new Set();
  offers.forEach((offer) => cities.add(offer.city.name));
  return Array.from(cities);
};

export const getCurrentName = (name) => {
  if (name.includes(NameBlockCards.NEAR)) {
    return NameBlockCards.NEAR;
  }

  if (name.includes(NameBlockCards.CITIES)) {
    return NameBlockCards.CITIES;
  }

  return NameBlockCards.FAVORITES;
};

export const filterNearOffers = (offers, nearOffers) => {
  return offers.filter((item) => {
    return nearOffers.find((item2) => item2.id === item.id);
  });
};
