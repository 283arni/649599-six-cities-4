import PropTypes from 'prop-types';

export const reviewType = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.shape({
    fullTime: PropTypes.string.isRequired,
    cutedTime: PropTypes.string.isRequired,
  }).isRequired,
  text: PropTypes.string.isRequired
};
