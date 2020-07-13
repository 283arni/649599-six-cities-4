import PropTypes from 'prop-types';

export const userType = {
  avatar: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  super: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
