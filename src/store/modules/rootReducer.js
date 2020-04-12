import { combineReducers } from 'redux';

import auth from './auth/reducers';
import modal from './modal/reducers';

export default combineReducers({
  auth,
  modal,
});
