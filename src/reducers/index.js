import { combineReducers } from 'redux';

import items from './items';
import users from './users';
import categories from './categories';
import conditions from './conditions';
import itemStatuses from './itemStatuses';

export default combineReducers({
  items,
  users,
  categories,
  conditions,
  itemStatuses
});