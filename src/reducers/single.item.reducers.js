import { LOAD_SINGLE_ITEM, 
         EDITING, 
         EDIT_ITEM,
         ITEM_SOLD, 
         DEL_ITEM 
       } from '../actions/items.actions';

const initialState = {
  Category : '',
  Condition : '',
  Status : '',
  User : ''
};

const singleItem = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_SINGLE_ITEM:
      return Object.assign({}, state, action.item);

    case EDITING:      
      if (state.id === action.id) {
        return Object.assign({}, state, {
          isEditing : action.editing
        });        
      }

      return Object.assign({}, state, {
        isEditing : false
      });  

    case EDIT_ITEM:
      console.log(action.updatedItem);
      
      return Object.assign({}, state, action.updatedItem);

    case ITEM_SOLD:      
      return Object.assign({}, state, action.soldItem);

    case DEL_ITEM:
      return Object.assign({}, state, {
        category_id : '',
        condition_id : '',
        created_by : '',
        description : '',
        dimensions : '',
        is_sold : '',
        manufacturer : '',
        model : '',
        name : '',
        notes : '',
        price : '',
        deletedAt : ''
      });

    default:
      return state;
  }
};

export default singleItem;