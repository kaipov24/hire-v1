import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import resumes from './resumes'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    resumes
  })

export default createRootReducer
