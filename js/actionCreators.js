import { SET_SEARCH_TERM, SET_OMDB_DATA } from './actions'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm: searchTerm }
}

export function setOMDBData (omdbData) {
  return { type: SET_OMDB_DATA, omdbData: 'placeholder' }
}

export function getOMDBData (omdbData) {
  return function (dispatch) {
    dispatch(setOMDBData(omdbData))
  }
}
