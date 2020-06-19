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
    rating: 5
  }
];

export const offer = {
  id: 2,
  photo: `./img/apartment-02.jpg`,
  premium: true,
  price: 250,
  title: `Wood and stone place`,
  type: `room`,
  rating: 5
};

export const property = {
  photos: [`./img/studio-01.jpg`, `./img/apartment-03.jpg`],
  title: `Title`,
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
