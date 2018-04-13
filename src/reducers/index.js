import { combineReducers } from 'redux'
import counter from './counter'
import cats from './cats'

const app = combineReducers({
  counter,
  cats
})

export default app
