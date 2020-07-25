import {SortOffersType, NameBlockCard} from './const';


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
    case SortOffersType.PRICE_HIGH:
      return currentOffers.sort((a, b) => b.price - a.price);
    case SortOffersType.PRICE_LOW:
      return currentOffers.sort((a, b) => a.price - b.price);
    case SortOffersType.TOP:
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
  if (name.includes(NameBlockCard.NEAR)) {
    return NameBlockCard.NEAR;
  }

  if (name.includes(NameBlockCard.CITIES)) {
    return NameBlockCard.CITIES;
  }

  return NameBlockCard.FAVORITES;
};

export const filterNearOffers = (offers, nearOffers) => {
  return offers.filter((offer) => {
    return nearOffers.find((nearOffer) => nearOffer.id === offer.id);
  });
};

export const getOffersSortedCities = (offers) => {
  return getCities(offers.slice()).map((item) => {
    return {
      city: item,
      offers: offers.filter((offer) => item === offer.city.name)
    };
  });
};
