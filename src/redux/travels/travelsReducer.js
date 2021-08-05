import {
  FETCH_TRAVELS_REQUEST,
  FETCH_TRAVELS_SUCCESS,
  FETCH_TRAVELS_FAILURE,
  FETCH_TRAVELS_DELETE,
  FETCH_TRAVELS_ADD
} from './travelsTypes'

const initialState = {
  loading: false,
  travels: [],
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRAVELS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_TRAVELS_SUCCESS:
      return {
        loading: false,
        travels: action.payload,
        error: ''
      }
    case FETCH_TRAVELS_FAILURE:
      return {
        loading: false,
        travels: [],
        error: action.payload
      }
    case FETCH_TRAVELS_DELETE:
      return {
        loading: false,
        error: action.payload
      }
    case FETCH_TRAVELS_ADD:
      return {
        ...state,
        travels: action.payload,
        loading: false,
      }
    default: return state
  }
}

export default reducer
