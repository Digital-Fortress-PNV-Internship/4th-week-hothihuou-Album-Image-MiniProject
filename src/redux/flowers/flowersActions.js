import axios from 'axios'
import {
  FETCH_FLOWERS_REQUEST,
  FETCH_FLOWERS_SUCCESS,
  FETCH_FLOWERS_FAILURE,
  FETCH_FLOWERS_DELETE,
  FETCH_FLOWERS_ADD
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

export const fetchFlowersDelete = () => {
  return {
    type: FETCH_FLOWERS_DELETE

  }
}


export const fetchFlowersAdd = () => {
  return {
    type: FETCH_FLOWERS_ADD

  }
}

export const fetchFlowers = () => {
  return (dispatch) => {
    dispatch(fetchFlowersRequest())
    axios
      .get('  http://localhost:3000/flowers')
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

export const deleteFlowers = (id) => {

  return (dispatch) => {

    axios
      .delete(` http://localhost:3000/flowers/${id}`)
      .then(response => {
        console.log("res", response);
        dispatch(fetchFlowersAdd());
        dispatch(fetchFlowers());
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchFlowersFailure(error.message))
      })
  }
}


export const addFlowers = (flowers) => {

  return (dispatch) => {

    axios
      .post(` http://localhost:3000/flowers`, flowers)
      .then(response => {
        console.log("res", response);
        dispatch(fetchFlowersAdd());
        dispatch(fetchFlowers());
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchFlowersFailure(error.message))
      })
  }
}
