// import axios from 'axios'

// const GET_TRAININGS = 'GET_TRAININGS'
// const ADD_TRAINING = 'ADD_TRAINING'
// const EDIT_TRAINING = 'EDIT_TRAINING'
// const FILTER_TRAININGS = 'FILTER_TRAININGS'

// const SORTING = 'SORTING'

// const initialState = {
//   trainings: [],
//   activeTraining: {}
// }

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case GET_TRAININGS:
//       return {
//         ...state,
//         trainings: action.trainings
//       }

//     case SORTING:
//       return { ...state, sort: action.sort }

//     case FILTER_TRAININGS:
//       return { ...state, activeTraining: action.activeTraining }

//     case ADD_TRAINING:
//       return {
//         ...state,
//         trainings: [
//           ...state.trainings,
//           {
//             id: action.id,
//             exercise: action.exercise,
//             date: action.date,
//             range: action.range,
//             comment: action.comment,
//             isDeleted: action.isDeleted
//           }
//         ]
//       }
//     case EDIT_TRAINING:
//       return {
//         ...state,
//         trainings: [
//           ...state.trainings,
//           {
//             id: action.id,
//             exercise: action.exercise,
//             date: action.date,

//             range: action.range,
//             comment: action.comment,
//             isDeleted: action.isDeleted
//           }
//         ]
//       }

//     default:
//       return state
//   }
// }

// export function sorting(sort) {
//   return { type: SORTING, sort }
// }

// export function filtering(activeTraining) {
//   return { type: FILTER_TRAININGS, activeTraining }
// }

// export function getTrainings() {
//   return function (dispatch) {
//     axios(`/api/v1/trainings`).then(({ data }) => {
//       dispatch({ type: GET_TRAININGS, trainings: data })
//     })
//   }
// }

// export function addTrainingToJSON(id, date, exercise, range, comment, isDeleted) {
//   return (dispatch) => {
//     axios({
//       method: 'patch',
//       url: `/api/v1/trainings`,
//       data: {
//         id: 'id',
//         date,
//         exercise,
//         range,
//         comment,
//         isDeleted
//       }
//     }).then((data) => {
//       dispatch({
//         type: ADD_TRAINING,
//         id: data.id,
//         date: data.date,
//         exercise: data.exercise,
//         range: data.range,
//         comment: data.comment,
//         isDeleted: data.isDeleted
//       })
//     })
//   }
// }

// export function editTrainingInJSON(id, date, exercise, range, comment, isDeleted) {
//   return (dispatch) => {
//     axios({
//       method: 'patch',
//       url: `/api/v1/trainings/${id}`,
//       data: {
//         id: +id,
//         date,
//         exercise,
//         range,
//         comment,
//         isDeleted
//       }
//     }).then((data) => {
//       dispatch({
//         type: ADD_TRAINING,
//         id: +data.id,
//         date: data.date,
//         exercise: data.exercise,
//         range: data.range,
//         comment: data.comment,
//         isDeleted: data.isDeleted
//       })
//     })
//   }
// }
