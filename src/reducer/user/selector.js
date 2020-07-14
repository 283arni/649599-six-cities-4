import NameSpace from '../name-space';
import {createSelector} from 'reselect';
import {AuthorizationStatus} from '../../mocks/data/const';


export const getAuth = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

export const getUser = (state) => {
  return state[NameSpace.USER].user;
};

export const checkAuthUser = createSelector(
    getAuth,
    (auth) => {
      return auth === AuthorizationStatus.NO_AUTH;
    }
);

