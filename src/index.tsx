import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
import {Operation as DataOperation, ActionCreator as DataActionCreator} from './reducer/data/data';

const api = createApi(
    () => {
      store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
    },
    (err) => {
      store.dispatch(DataActionCreator.loadMessageServer(err));
    }
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadOffers())
  .then((city) => store.dispatch(SiteActionCreator.changeCurrentCity(city)));

store.dispatch(UserOperation.checkAuth())
  .then(() => store.dispatch(DataOperation.loadFavoriteOffers()));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
