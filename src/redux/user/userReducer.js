import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USER_DELETE,
  FETCH_USER_ADD
} from './userTypes'

const initialState = {
  loading: false,
  users: [],
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }

    case FETCH_USER_DELETE:
      return {
        loading: false,
        error: action.payload
      }
    case FETCH_USER_ADD:
      return {
        ...state,
        users: action.payload,
        loading: false,
      }
    default: return state
  }
}

export default reducer
