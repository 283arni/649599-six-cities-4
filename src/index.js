import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Ads} from './mocks/data/index';
import {offers} from './mocks/data/offers';


ReactDOM.render(
    <App
      housingCount={Ads.HOUSING_COUNT}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
