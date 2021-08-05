import {
  FETCH_FLOWERS_REQUEST,
  FETCH_FLOWERS_SUCCESS,
  FETCH_FLOWERS_FAILURE,
  FETCH_FLOWERS_DELETE,
  FETCH_FLOWERS_ADD
} from './flowersTypes'

const initialState = {
  loading: false,
  flowers: [],
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLOWERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_FLOWERS_SUCCESS:
      return {
        loading: false,
        flowers: action.payload,
        error: ''
      }
    case FETCH_FLOWERS_FAILURE:
      return {
        loading: false,
        flowers: [],
        error: action.payload
      }
      case FETCH_FLOWERS_DELETE:
        return {
          loading: false,
          error: action.payload
        }
      case FETCH_FLOWERS_ADD:
        return {
          ...state,
          flowers: action.payload,
          loading: false,
        }
    default: return state
  }
}

export default reducer
