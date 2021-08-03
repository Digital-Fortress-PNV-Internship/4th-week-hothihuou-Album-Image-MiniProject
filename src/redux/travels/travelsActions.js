import axios from 'axios'
import {
  FETCH_TRAVELS_REQUEST,
  FETCH_TRAVELS_SUCCESS,
  FETCH_TRAVELS_FAILURE
} from './travelsTypes'


export const fetchTravelsRequest = () => {
  return {
    type: FETCH_TRAVELS_REQUEST
  }
}

export const fetchTravelsSuccess = travels => {
  return {
    type: FETCH_TRAVELS_SUCCESS,
    payload: travels
  }
}

export const fetchTravelsFailure = error => {
  return {
    type: FETCH_TRAVELS_FAILURE,
    payload: error
  }
}


export const fetchTravels = () => {
  return (dispatch) => {
    dispatch(fetchTravelsRequest())
    axios
      .get('  http://localhost:3000/travels')
      .then(response => {
        // response.data is the travels
        const travels = response.data
        dispatch(fetchTravelsSuccess(travels))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchTravelsFailure(error.message))
      })
  }
}


