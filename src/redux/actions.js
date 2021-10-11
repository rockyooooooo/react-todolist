import {
  ADD_TODO,
  DELETE_ALL_TODOS,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_FILTER,
  TOGGLE_TODO
} from './actionTypes'

export const addTodo = (content) => {
  return {
    type: ADD_TODO,
    payload: {
      content
    }
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  }
}

export const editTodo = (id, content) => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      content
    }
  }
}

export const deleteAllTodos = () => {
  return {
    type: DELETE_ALL_TODOS
  }
}

export const toggleFilter = (filter) => {
  return {
    type: TOGGLE_FILTER,
    payload: {
      filter
    }
  }
}
