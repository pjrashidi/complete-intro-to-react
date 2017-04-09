import { SET_SEARCH_TERM, SET_OMDB_DATA } from './actions'

const DEFAULT_STATE = {
  searchTerm: '',
  omdbData: {}
}

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
}

const setOMDBData = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {omdbData: action.omdbData})
  console.log('setOMDBData', newState)
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case SET_OMDB_DATA:
      return setOMDBData(state, action)
    default:
      return state
  }
}

export default rootReducer
