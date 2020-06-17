import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {Ads, namesCards} from './mocks/data/index';


ReactDOM.render(
    <App
      housingCount={Ads.HOUSING_COUNT}
      namesCards={namesCards}
    />,
    document.querySelector(`#root`)
);
