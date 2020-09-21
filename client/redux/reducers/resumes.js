import axios from 'axios'

const GET_USERS = 'GET_USERS'

const SEND_EMAIL = 'SEND_EMAIL'

const initialState = {
  users: [],
  message: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.users
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
          languages: action.languages,
          condtion: action.condtion,
          age: action.age,
          experience: action.experience,
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
  languages,
  condition,
  age,
  experience,
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
        languages,
        condition,
        age,
        experience,
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
        languages: data.languages,
        condition: data.condition,
        age: data.age,
        experience: data.experience,
        position: data.position,
        since: data.since,
        till: data.till,
        highlights: data.highlights,
        text: data.text
      })
    })
  }
}
