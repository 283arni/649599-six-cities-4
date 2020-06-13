import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const titleCardHandler = () => {};

const App = (props) => {
  const {housingCount, namesCards} = props;

  return (
    <Main
      housingCount={housingCount}
      namesCards={namesCards}
      onTitleCardClick={titleCardHandler}
    />
  );
};

App.propTypes = {
  housingCount: PropTypes.number.isRequired,
  namesCards: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default App;
