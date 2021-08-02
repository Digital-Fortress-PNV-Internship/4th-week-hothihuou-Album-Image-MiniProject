import axios from 'axios'
import {
  FETCH_ANIMALS_REQUEST,
  FETCH_ANIMALS_SUCCESS,
  FETCH_ANIMALS_FAILURE
} from './animalsTypes'


export const fetchAnimalsRequest = () => {
  return {
    type: FETCH_ANIMALS_REQUEST
  }
}

export const fetchAnimalsSuccess = animals => {
  return {
    type: FETCH_ANIMALS_SUCCESS,
    payload: animals
  }
}

export const fetchAnimalsFailure = error => {
  return {
    type: FETCH_ANIMALS_FAILURE,
    payload: error
  }
}


export const fetchAnimals = () => {
  return (dispatch) => {
    dispatch(fetchAnimalsRequest())
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        // response.data is the animals
        const animals = response.data
        dispatch(fetchAnimalsSuccess(animals))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchAnimalsFailure(error.message))
      })
  }
}


