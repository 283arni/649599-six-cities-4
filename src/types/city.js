import PropTypes from 'prop-types';

export const cityType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  coords: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
}).isRequired;

