import { combineReducers} from 'redux'
import itemReducer from './itemReducer';
import userReducer from './userReducer';
import editItemReducer from './editItemReducer';

export default combineReducers({
  items: itemReducer,
  users: userReducer,
  editItem: editItemReducer
})