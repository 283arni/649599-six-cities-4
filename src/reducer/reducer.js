import {combineReducers} from 'redux';
import {reducer as data} from './data/data';
import {reducer as offer} from './offer/offer';
import {reducer as user} from './user/user';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.OFFER]: offer,
  [NameSpace.USER]: user,
});

