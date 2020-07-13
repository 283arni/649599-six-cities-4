import NameSpace from '../name-space';


export const getAuth = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

export const getUser = (state) => {
  return state[NameSpace.USER].user;
};

