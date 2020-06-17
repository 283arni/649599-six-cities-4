import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const titleCardHandler = () => {};

const App = (props) => {
  const {housingCount} = props;

  return (
    <Main
      housingCount={housingCount}
      titleCardHandler={titleCardHandler}
    />
  );
};

App.propTypes = {
  housingCount: PropTypes.number.isRequired
};

export default App;
