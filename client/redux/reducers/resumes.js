import axios from 'axios'

const GET_USERS = 'GET_USERS'
const ADD_NEW_USER = 'ADD_NEW_USER'


const initialState = {
  users: [],
  newUser: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.users
      }

    case ADD_NEW_USER:
      return {
        ...state,
        newUser: {
          firstName: action.firstName,
          lastName: action.lastName,
          skills: action.skills,
          email: action.email,
          age: action.age,
          education: action.education,
          experience: action.experience
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

export function addNewUser(firstName, lastName, email, age, skills, education, experience ) {
  return (dispatch) => {
    axios({
      method: 'post',
      url: `/api/v1/users`,
      data: { firstName, lastName, email, age, skills, education, experience }
    }).then((data) => {
      dispatch({
        type: ADD_NEW_USER,
        lastName: data.lastName,
        skills: data.skills,
        email: data.email,
        age: data.age,
        education: data.education,
        experience: data.experience
      })
    })
  }
}