import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import reducer from './reducer/reducer';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createApi} from './api';
import {AuthorizationStatus} from './const';
import {Operation as UserActionCreator} from './reducer/user/user';
import {ActionCreator as SiteActionCreator} from './reducer/site/site';
import {Operation as DataOperation} from './reducer/data/data';

const api = createApi(() => {
  store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
});

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(DataOperation.loadOffers())
  .then((city) => store.dispatch(SiteActionCreator.changeCurrentCity(city)));


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
