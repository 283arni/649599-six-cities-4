import PropTypes from 'prop-types';

export const offerType = {
  id: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  premium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export const propertyType = {
  photos: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  premium: PropTypes.bool.isRequired,
  type: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  amountBedrooms: PropTypes.number.isRequired,
  maxGustes: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  things: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    super: PropTypes.bool.isRequired
  }).isRequired
};
