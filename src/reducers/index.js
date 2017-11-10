import { combineReducers } from 'redux';

import singleItem from './single.item.reducers';
import itemList from './items.reducers';
import categoryList from './categories.reducers';
import statusList from './statuses.reducers';
import userList from './users.reducers';
import conditionList from './conditions.reducers';


export default combineReducers({
  singleItem,
  itemList,
  categoryList,
  statusList,
  userList,
  conditionList

});