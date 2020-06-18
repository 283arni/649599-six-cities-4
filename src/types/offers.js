import PropTypes from 'prop-types';

const offerType = {
  id: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  premium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};


export default offerType;
