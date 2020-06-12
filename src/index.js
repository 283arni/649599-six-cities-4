import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Ads = {
  HOUSING_COUNT: 312
};

const namesCards = [`Beautiful &amp; luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`];

ReactDOM.render(
    <App
      housingCount={Ads.HOUSING_COUNT}
      namesCards={namesCards}
    />,
    document.querySelector(`#root`)
);
