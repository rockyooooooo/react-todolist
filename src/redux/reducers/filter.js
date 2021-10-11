import { TOGGLE_FILTER } from '../actionTypes'

const initialState = {
  filter: null
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        filter: action.payload.filter
      }

    default:
      return state
  }
}

export default filterReducer
