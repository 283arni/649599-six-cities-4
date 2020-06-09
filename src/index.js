import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Ads = {
  HOUSING_COUNT: 312
};

ReactDOM.render(
    <App
      housingCount={Ads.HOUSING_COUNT}
    />,
    document.querySelector(`#root`)
);
