import { SET_SEARCH_TERM } from './actions'

export function setSearchTerm (searchTerm) {
  console.log('test2')
  return { type: SET_SEARCH_TERM, searchTerm }
}
