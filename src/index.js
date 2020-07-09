import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import reducer from './reducer/reducer';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createApi} from './api';
import {ActionCreator} from './reducer/offer/offer';
import {Operation as DataOperation} from './reducer/data/data';

const api = createApi(()=> {});

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
    // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

store.dispatch(DataOperation.loadOffers())
  .then((city) => store.dispatch(ActionCreator.changeCurrentCity(city)));


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
