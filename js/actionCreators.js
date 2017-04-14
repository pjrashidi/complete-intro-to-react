import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions'
import axios from 'axios'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm }
}

export function addOMDBData (omdbData, imdbID) {
  return { type: ADD_OMDB_DATA, omdbData, imdbID }
}

export function getOMDBData (imdbID) {
  return (dispatch) => {
    axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
      .then(function (response) {
        dispatch(addOMDBData(response.data, imdbID))
      })
      .catch((error) => console.error('axios error', error))
  }
}
