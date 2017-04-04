import { SET_SEARCH_TERM } from './actions'

const DEFAULT_STATE = {
  searchTerm: 'something random'
}

const setSearchTerm = (state, action) => {
  console.log('test3')
  const newState = {}
  Object.assign(newState, state, {search: action.searchTerm})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    default:
      return state
  }
}

export default rootReducer
