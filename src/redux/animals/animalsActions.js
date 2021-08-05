import axios from 'axios'
import {
  FETCH_ANIMALS_REQUEST,
  FETCH_ANIMALS_SUCCESS,
  FETCH_ANIMALS_FAILURE,
  FETCH_ANIMALS_DELETE,
  FETCH_ANIMALS_ADD
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


export const fetchAnimalsDelete = () => {
  return {
    type: FETCH_ANIMALS_DELETE

  }
}


export const fetchAnimalsAdd = () => {
  return {
    type: FETCH_ANIMALS_ADD

  }
}


export const fetchAnimals = () => {
  return (dispatch) => {
    dispatch(fetchAnimalsRequest())
    axios
      .get(' http://localhost:3000/animals')
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


export const deleteAnimals = (id) => {

  return (dispatch) => {

    axios
      .delete(` http://localhost:3000/animals/${id}`)
      .then(response => {
        console.log("res", response);
        dispatch(fetchAnimalsAdd());
        dispatch(fetchAnimals());
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchAnimalsFailure(error.message))
      })
  }
}


export const addAnimals = (animals) => {

  return (dispatch) => {

    axios
      .post(` http://localhost:3000/animals`, animals)
      .then(response => {
        console.log("res", response);
        dispatch(fetchAnimalsAdd());
        dispatch(fetchAnimals());
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchAnimalsFailure(error.message))
      })
  }
}

