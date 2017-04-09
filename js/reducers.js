import { SET_SEARCH_TERM, GET_OMDB_DATA } from './actions'

const DEFAULT_STATE = {
  searchTerm: '',
  omdbData: {}
}

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
}

const getOMDBData = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {omdbData: action.omdbData})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case GET_OMDB_DATA:
      return getOMDBData(state, action)
    default:
      return state
  }
}

export default rootReducer
