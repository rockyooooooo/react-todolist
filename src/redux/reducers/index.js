import { combineReducers } from 'redux'
import todosReducer from './todos'
import filterReducer from './filter'

export default combineReducers({
  todoState: todosReducer,
  filterState: filterReducer
})
