import axios from 'axios'

const GET_USERS = 'GET_USERS'
const ADD_NEW_USER = 'ADD_NEW_USER'
const SEND_EMAIL = 'SEND_EMAIL'

const initialState = {
  users: [],
  newUser: {},
  message: {}
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
    case SEND_EMAIL:
      return {
        ...state,
        message: {
          from: action.from,
          to: action.to,
          skills: action.skills,
          education: action.education,
          spec: action.spec,
          phone: action.phone,
          email: action.email,
          job: action.job,
          position: action.position,
          since: action.since,
          till: action.till,
          highlights: action.highlights,
          text: action.text
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

export function addNewUser(firstName, lastName, email, age, skills, education, experience) {
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

export function sendEmail(
  from,
  to,
  firstName,
  lastName,
  skills,
  education,
  spec,
  phone,
  email,
  job,
  position,
  since,
  till,
  highlights,
  text
) {
  return (dispatch) => {
    axios({
      method: 'post',
      url: `/api/v1/add`,
      data: {
        from,
        to,
        firstName,
        lastName,
        skills,
        education,
        spec,
        phone,
        email,
        job,
        position,
        since,
        till,
        highlights,
        text
      }
    }).then((data) => {
      dispatch({
        type: SEND_EMAIL,
        from: data.from,
        to: data.to,
        skills: data.skills,
        education: data.education,
        spec: data.spec,
        phone: data.phone,
        email: data.email,
        job: data.job,
        position: data.position,
        since: data.since,
        till: data.till,
        highlights: data.highlights,
        text: data.text
      })
    })
  }
}
