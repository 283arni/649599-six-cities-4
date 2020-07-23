import NameSpace from '../name-space';
import {createSelector} from 'reselect';
import {AuthorizationStatus} from '../../const';


const getSelector = (state) => state[NameSpace.USER];

export const getAuth = createSelector(
    getSelector,
    (state) => state.authorizationStatus
);

export const getUser = createSelector(
    getSelector,
    (state) => state.user
);


export const checkAuthUser = createSelector(
    getAuth,
    (auth) => {
      return auth === AuthorizationStatus.AUTH;
    }
);

