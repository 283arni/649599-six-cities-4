import PropTypes from 'prop-types';


export const offerType = {
  amountBedrooms: PropTypes.number.isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    zoom: PropTypes.number.isRequired
  }).isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  things: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    super: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  photos: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  favorite: PropTypes.bool.isRequired,
  premium: PropTypes.bool.isRequired,
  coords: PropTypes.shape({
    target: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    zoom: PropTypes.number.isRequired
  }).isRequired,
  maxGustes: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export const favoriteOfferType = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape(offerType)
  ).isRequired
};
