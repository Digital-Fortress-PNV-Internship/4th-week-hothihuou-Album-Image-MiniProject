import {
  FETCH_ANIMALS_REQUEST,
  FETCH_ANIMALS_SUCCESS,
  FETCH_ANIMALS_FAILURE,
  FETCH_ANIMALS_DELETE,
  FETCH_ANIMALS_ADD
} from './animalsTypes'

const initialState = {
  loading: false,
  animals: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANIMALS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_ANIMALS_SUCCESS:
      return {
        loading: false,
        animals: action.payload,
        error: ''
      }
    case FETCH_ANIMALS_FAILURE:
      return {
        loading: false,
        animals: [],
        error: action.payload
      }
      case FETCH_ANIMALS_DELETE:
        return {
          loading: false,
          error: action.payload
        }
      case FETCH_ANIMALS_ADD:
        return {
          ...state,
          animals: action.payload,
          loading: false,
        }
    default: return state
  }
}

export default reducer
