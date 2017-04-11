import { SET_SEARCH_TERM, SET_OMDB_DATA } from './actions'
import axios from 'axios'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm }
}

export function setOMDBData (omdbData) {
  return { type: SET_OMDB_DATA, omdbData }
}

export function getOMDBData (imdbID) {
  return (dispatch) => {
    axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
      .then(function (response) {
        dispatch(setOMDBData(response.data))
      })
      .catch((error) => console.error('axios error', error))
  }
}
