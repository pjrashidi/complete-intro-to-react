import { SET_SEARCH_TERM, SET_OMDB_DATA } from './actions'

import axios from 'axios'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm: searchTerm }
}

export function setOMDBData (omdbData) {
  console.log('setOMDBData')
  return { type: SET_OMDB_DATA, omdbDATA: omdbData }
}

export function getOMDBData (imdbID) {
  console.log('getOMDBData')
  return dispatch => {
  axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
    .then((response) => {
      dispatch(setOMDBData(response.data))
      // this.setState({omdbData: response.data})
    })
    .catch((error) => console.error('axios error', error))
  }
}
