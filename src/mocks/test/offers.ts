export const offers = [
  {
    amountBedrooms: 3,
    city: {
      name: `Brussels`,
      coords: [50.846557, 4.351697],
      zoom: 12
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    id: 4,
    things: [`Conditioner`, `WiFi`],
    owner: {
      avatar: `./img/avatar-angelina.jpg`,
      name: `Max`,
      super: true,
      id: 3
    },
    photos: [`./img/apartment-01.jpg`, `./img/apartment-02.jpg`, `./img/apartment-03.jpg`, `./img/studio-01.jpg`, `./img/apartment-03.jpg`],
    favorite: false,
    premium: true,
    coords: {
      target: [50.846557, 4.351697],
      zoom: 13
    },
    maxGustes: 2,
    photo: `./img/apartment-01.jpg`,
    price: 220,
    rating: 2,
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `room`,
  },
  {
    amountBedrooms: 3,
    city: {
      name: `Brussels`,
      coords: [50.846557, 4.351697],
      zoom: 12
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    id: 1,
    things: [`Conditioner`, `WiFi`],
    owner: {
      avatar: `./img/avatar-angelina.jpg`,
      name: `Max`,
      super: true,
      id: 3
    },
    photos: [`./img/apartment-01.jpg`, `./img/apartment-02.jpg`, `./img/apartment-03.jpg`, `./img/studio-01.jpg`, `./img/apartment-03.jpg`],
    favorite: false,
    premium: true,
    coords: {
      target: [50.846557, 4.351697],
      zoom: 13
    },
    maxGustes: 2,
    photo: `./img/apartment-01.jpg`,
    price: 220,
    rating: 2,
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `room`,
  },
  {
    amountBedrooms: 3,
    city: {
      name: `Brussels`,
      coords: [50.846557, 4.351697],
      zoom: 12
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    id: 2,
    things: [`Conditioner`, `WiFi`],
    owner: {
      avatar: `./img/avatar-angelina.jpg`,
      name: `Max`,
      super: true,
      id: 3
    },
    photos: [`./img/apartment-01.jpg`, `./img/apartment-02.jpg`, `./img/apartment-03.jpg`, `./img/studio-01.jpg`, `./img/apartment-03.jpg`],
    favorite: false,
    premium: true,
    coords: {
      target: [50.846557, 4.351697],
      zoom: 13
    },
    maxGustes: 2,
    photo: `./img/apartment-01.jpg`,
    price: 220,
    rating: 2,
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `room`,
  }
];

export const favoriteOffers = [
  {
    city: `Brussels`,
    offers: [
      offers[0]
    ]
  }, {
    city: `Amsterdam`,
    offers: [
      offers[1]
    ]
  },
];
