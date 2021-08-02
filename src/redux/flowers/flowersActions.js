import axios from 'axios'
import {
  FETCH_FLOWERS_REQUEST,
  FETCH_FLOWERS_SUCCESS,
  FETCH_FLOWERS_FAILURE
} from './flowersTypes'


export const fetchFlowersRequest = () => {
  return {
    type: FETCH_FLOWERS_REQUEST
  }
}

export const fetchFlowersSuccess = flowers => {
  return {
    type: FETCH_FLOWERS_SUCCESS,
    payload: flowers
  }
}

export const fetchFlowersFailure = error => {
  return {
    type: FETCH_FLOWERS_FAILURE,
    payload: error
  }
}


export const fetchFlowers = () => {
  return (dispatch) => {
    dispatch(fetchFlowersRequest())
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        // response.data is the flowers
        const flowers = response.data
        dispatch(fetchFlowersSuccess(flowers))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchFlowersFailure(error.message))
      })
  }
}


