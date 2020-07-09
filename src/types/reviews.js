import PropTypes from 'prop-types';

export const reviewType = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    super: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

