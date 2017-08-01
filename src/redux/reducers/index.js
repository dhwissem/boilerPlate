import { combineReducers } from 'redux';

import rentals from './rentals';
import users from './users';
import tabs from './tabs';

const rootReducer = combineReducers({
  rentals,
  users,
  tabs
});

export default rootReducer;
