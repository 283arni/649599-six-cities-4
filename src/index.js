import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers, property} from './mocks/data/offers';


ReactDOM.render(
    <App
      housingCount={offers.length}
      offers={offers}
      property={property}
    />,
    document.querySelector(`#root`)
);
