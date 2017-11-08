import { combineReducers } from 'redux';

import itemList from './items.reducers';
import categoryList from './categories.reducers';
import statusList from './statuses.reducers';
import userList from './users.reducers';
import conditionList from './conditions.reducers';

export default combineReducers({
  itemList,
  categoryList,
  statusList,
  userList,
  conditionList
});