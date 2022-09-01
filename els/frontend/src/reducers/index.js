import { combineReducers } from 'redux';
import categories from './categories';
import errors from './errors';
import messages from './messages';
import auth from './auth';
import profiles from './profiles';
import activitylogs from './activitylogs';

export default combineReducers({
  categories,
  errors,
  messages,
  auth,
  profiles,
  activitylogs,
});
