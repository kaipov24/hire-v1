import axios from 'axios'

const GET_USERS = 'GET_USERS'
const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const EDIT_ITEM = 'EDIT_ITEM'

const initialState = {
  users: [],
  newItem: {},
  id: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.users
      }
    case DELETE_ITEM:
      return {
        ...state,
        id: action.id
      }
    case EDIT_ITEM:
      return {
        ...state,
        id: action.id
      }
    case ADD_NEW_ITEM:
      return {
        ...state,
        newItem: {
          title: action.title,
          category: action.category,
          description: action.description,
          price: action.price
        }
      }
    default:
      return state
  }
}

export function getUsers() {
  return function (dispatch) {
    axios(`/api/v1/users`).then(({ data }) => {
      dispatch({ type: GET_USERS, users: data })
    })
  }
}

export function addNewItem(title, category, description, price) {
  return (dispatch) => {
    axios({
      method: 'post',
      url: `/api/v1/items`,
      data: { title, category, description, price }
    }).then((data) => {
      dispatch({
        type: ADD_NEW_ITEM,
        title: data.title,
        category: data.category,
        description: data.description,
        price: data.price
      })
    })
  }
}

export function deleteItem(id) {
  return (dispatch) => {
    axios({
      method: 'delete',
      url: `/api/v1/items/${id}`
    }).then((data) => {
      dispatch({ type: DELETE_ITEM, id: data.id })
    })
  }
}

export function editSelectedItem(id, title, category, description, price) {
  return (dispatch) => {
    axios({
      method: 'patch',
      url: `/api/v1/items/${id}`,
      data: { id, title, category, description, price }
    }).then((data) => {
      dispatch({
        type: EDIT_ITEM,
        id: data.id,
        title: data.title,
        category: data.category,
        description: data.description,
        price: data.price
      })
    })
  }
}
