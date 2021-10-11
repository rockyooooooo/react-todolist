import {
  ADD_TODO,
  DELETE_ALL_TODOS,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO
} from '../actionTypes'

let id = 0

const initializeTodos = () => {
  const todosData = JSON.parse(localStorage.getItem('todos')) || []
  id = todosData.length ? todosData[0].id + 1 : 1
  return todosData
}

const initialState = {
  todos: initializeTodos()
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          {
            id: id++,
            content: action.payload.content,
            isChecked: false
          },
          ...state.todos
        ]
      }

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id)
      }

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.id) return todo
          return {
            ...todo,
            isChecked: !todo.isChecked
          }
        })
      }

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.id) return todo
          return {
            ...todo,
            content: action.payload.content
          }
        })
      }

    case DELETE_ALL_TODOS:
      return {
        ...state,
        todos: []
      }

    default:
      return state
  }
}

export default todosReducer
