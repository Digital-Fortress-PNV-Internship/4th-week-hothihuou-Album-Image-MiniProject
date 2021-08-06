import axios from 'axios'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USER_DELETE,
  FETCH_USER_ADD
} from './userTypes'


export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}


export const fetchUsersDelete = () => {
  return {
    type: FETCH_USER_DELETE
  }
}


export const fetchUsersAdd = () => {
  return {
    type: FETCH_USER_ADD

  }
}


export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios
      .get('http://localhost:3000/human')
      .then(response => {
        // response.data is the users
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}


export const deleteUsers = (id) => {

  return (dispatch) => {

    axios
      .delete(` http://localhost:3000/human/${id}`)
      .then(response => {
        console.log("res", response);
        dispatch(fetchUsersDelete());
        dispatch(fetchUsers());
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}



export const addUsers = (user) => {

  return (dispatch) => {

    axios
      .post(` http://localhost:3000/human`, user)
      .then(response => {
        console.log("res", response);
        dispatch(fetchUsersAdd());
        dispatch(fetchUsers());
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}


