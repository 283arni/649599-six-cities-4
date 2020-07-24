

export interface offerType {
  amountBedrooms: number;
  city: {
    name: string;
    coords: number[];
    zoom: number;
  };
  description: string;
  id: number;
  things: string[];
  owner: {
    avatar: string;
    name: string;
    super: boolean;
    id: number;
  };
  photos: string[];
  favorite: boolean;
  premium: boolean;
  coords: {
    target: number[];
    zoom: number;
  };
  maxGustes: number;
  photo: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export interface favoriteOfferType {
  city: string;
  offers: offerType[];
};
