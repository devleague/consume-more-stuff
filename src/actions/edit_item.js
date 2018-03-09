import axios from 'axios';

const ITEMS_DB = '/api/items';

export const EDIT_ITEM = 'EDIT_ITEM';
export const LOAD_ITEM = 'LOAD_ITEM';

export const loadSingleItem = (id) => {
  return dispatch => {
    return axios.get(`${ITEMS_DB}/${id}`)
      .then(response => {
        return response.data;
      })
      .then(singleItem => {
        return dispatch({
          type: LOAD_ITEM,
          item: singleItem
        })
      })
  }
}

export const editItem = (item, redirectCallback) => {
  return dispatch => {
    const body = {
      id: item.id,
      name: item.name,
      price: item.price,
      model: item.model,
      dimensions: item.dimensions,
      notes: item.notes,
      category_id: item.category_id,
      condition_id: item.condition_id,
      item_status_id: item.item_status_id,
      image: item.image,
      user_id: item.user_id
    }

    return axios(`${ITEMS_DB}/${body.id}`, {
      method: "put",
      data: body,
      withCredentials: true
    })
      .then(item => {
        dispatch({
          type: LOAD_ITEM,
          item: item
        });
        redirectCallback();
      })
      .catch(err => {
        console.log('error', err)
      })
  }
}