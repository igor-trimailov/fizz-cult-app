import { combineReducers } from 'redux'
import exercise from './exercise'
import exercises from './exercises'
import user from './user'
import account from './account'
import routines from './routines'

export default combineReducers({
  exercise,
  exercises,
  routines,
  account,
  user,
})
