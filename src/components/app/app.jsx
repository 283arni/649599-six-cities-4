import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
import offerType from '../../types/offers';

const titleCardHandler = () => {};

const App = (props) => {
  const {housingCount, offers} = props;

  return (
    <Main
      housingCount={housingCount}
      titleCardHandler={titleCardHandler}
      offers={offers}
    />
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offerType).isRequired
  ),
  housingCount: PropTypes.number.isRequired
};

export default App;
