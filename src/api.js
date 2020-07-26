import axios from "axios";
import {ResponseStatus} from './const';

export const createApi = (onUnauthorized, onError) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === ResponseStatus.NO_ACCESS) {
      onUnauthorized();

      throw err;
    }

    if (response.status === ResponseStatus.ERROR) {
      onError(response);

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
