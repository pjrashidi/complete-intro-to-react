import { SET_SEARCH_TERM, GET_OMDB_DATA } from './actions'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm: searchTerm }
}

export function getOMDBData (omdbData) {
  return { type: GET_OMDB_DATA, omdbData: omdbData }
}
