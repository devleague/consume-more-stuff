import axios from 'axios';

export const CREATE_ITEM = 'CREATE_ITEM';
export const LOAD_ITEMS = 'LOAD_ITEMS';
export const EDIT_ITEM = 'EDIT_ITEM';
export const GET_CATEGORY = 'GET_CATEGORY';
export const LOAD_SINGLE_ITEM = 'LOAD_SINGLE_ITEM';
export const GET_USER_ITEMS = 'GET_USER_ITEMS';

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

export const getCategory = (id) => {
  // console.log(id)
  return (dispatch) => {
    axios.get(`/api/items/categories/${id}`)
    .then(data => {
      // console.log('GET' , data.data)
      dispatch({
        type: GET_CATEGORY,
        category: data.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export const getUserItems = (id) => {
  return dispatch => {
    return axios.get(`/api/users/${id}`)
    .then(result => {
      dispatch({
        type: GET_USER_ITEMS,
        userItems: result.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}