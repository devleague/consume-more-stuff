import { LOAD_SINGLE_ITEM, EDITING, EDIT_ITEM, DEL_ITEM } from '../actions/items.actions';

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
      const updatedItem = action.updatedItem;

      return Object.assign({}, state, {
        category_id : updatedItem.category_id,
        condition_id : updatedItem.condition_id,
        created_by : updatedItem.created_by,
        description : updatedItem.description,
        dimensions : updatedItem.dimensions,
        is_sold : updatedItem.is_sold,
        manufacturer : updatedItem.manufacturer,
        model : updatedItem.model,
        name : updatedItem.name,
        notes : updatedItem.notes,
        price : updatedItem.price,
        updatedAt : updatedItem.updatedAt
      });

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