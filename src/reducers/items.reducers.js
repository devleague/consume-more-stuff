import { LOAD_ITEMS, ADD_ITEM, EDIT_ITEM, EDITING, ERROR } from '../actions/items.actions';

const initialState = [];

const itemList = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_ITEMS:
      return [ ...action.items ];

    case ADD_ITEM:
      return [ ...state, action.newItem ];

    case EDITING:
      return state.map(item => {
        if (item.id === action.itemID) {
          return Object.assign({}, item, {
            isEditing : !item.isEditing
          });
        }

        return item;
      });

    case EDIT_ITEM:
      const updatedItem = action.updatedItem;

      return state.map((item) => {
        if (item.id === updatedItem.id) {
          return Object.assign({}, item, {
            name : updatedItem.name,
            price : updatedItem.price,
            description : updatedItem.description,
            manufacturer : updatedItem.manufacturer,
            modelname : updatedItem.modelname,
            category_id : updatedItem.category_id,
            condition_id : updatedItem.condition_id,
            is_sold : updatedItem.is_sold,
            created_by : updatedItem.created_by
          });
        }
      });

    default:
      return state;
  }
};

export default itemList;
