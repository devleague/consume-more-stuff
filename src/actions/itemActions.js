import axios from 'axios';

export const CREATE_ITEM = 'CREATE_ITEM';
export const LOAD_ITEMS = 'LOAD_ITEMS';
export const EDIT_ITEM = 'EDIT_ITEM';
export const GET_CAT = 'GET_CAT';
export const LOAD_SINGLE_ITEM = 'LOAD_SINGLE_ITEM';

export const loadItems = () => {
  return dispatch => {
      return axios.get(`/api/items`)
      .then(data => {
        dispatch({
          type: LOAD_ITEMS,
          items: data.data
        })
      })
      .catch(err => {
        console.log('err', err)
      })
  }
}

export const loadSingleItem = (id) => {
  return (dispatch) => {
    return axios.get(`/api/items/${id}`)
    .then(data => {
      dispatch({
        type: LOAD_SINGLE_ITEM,
        item: data.data
      })
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const createItem = (newItem, redirectCallback) => {
    return dispatch => {
      return axios.post('/api/items/new', {
        name: newItem.name,
        image: newItem.image,
        price: newItem.price,
        condition_id: newItem.condition,
        category_id: newItem.category,
        item_status_id: 1,
        model: newItem.model,
        dimensions: newItem.dimensions ,
        notes: newItem.notes
      })
      .then(json => {
          dispatch({
          type: CREATE_ITEM,
          item: json.data
        });
        redirectCallback();
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }




export const editItem = (item) => {

}

export const getCategory = (id) => {
  return (dispatch) => {
    axios.get(`/api/categories/${id}`)
    .then(result => {
      console.log('getcategory', result)
      dispatch({
        type: GET_CAT,
        categories: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export const getStatus = (id) => {

}

export const getCondition = (id) => {

}
