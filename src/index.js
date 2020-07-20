import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import reducer from './reducer/reducer';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createApi} from './api';
import {AuthorizationStatus} from './const';
import {ActionCreator as UserActionCreator, Operation as UserOperation} from './reducer/user/user';
import {ActionCreator as SiteActionCreator} from './reducer/site/site';
import {Operation as DataOperation} from './reducer/data/data';

const api = createApi(() => {
  store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadOffers())
  .then((city) => store.dispatch(SiteActionCreator.changeCurrentCity(city)));
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
