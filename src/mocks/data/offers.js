export const offers = [
  {
    id: 1,
    photo: `./img/apartment-01.jpg`,
    premium: true,
    price: 130,
    title: `Nice, cozy, warm big bed apartment`,
    type: `apartment`,
    rating: 3
  }, {
    id: 2,
    photo: `./img/apartment-02.jpg`,
    premium: true,
    price: 250,
    title: `Wood and stone place`,
    type: `room`,
    rating: 4.9
  }, {
    id: 3,
    photo: `./img/apartment-03.jpg`,
    premium: false,
    price: 220,
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `hotel`,
    rating: 3.7
  }, {
    id: 4,
    photo: `./img/apartment-01.jpg`,
    premium: false,
    price: 120,
    title: `Wood and stone place`,
    type: `apartment`,
    rating: 3
  }
];

export const property = {
  photos: [`./img/apartment-01.jpg`, `./img/apartment-02.jpg`, `./img/apartment-03.jpg`, `./img/studio-01.jpg`, `./img/apartment-03.jpg`],
  title: `Beautiful &amp; luxurious apartment at great location`,
  description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`],
  premium: false,
  type: {
    room: `Private Room`
  },
  rating: 3.7,
  amountBedrooms: 3,
  maxGustes: 3,
  price: 120,
  things: [`WiFi`, `Cable TV`, `Conditioner`],
  owner: {
    avatar: `./img/avatar-angelina.jpg`,
    name: `Petiy`,
    super: true
  }
};
