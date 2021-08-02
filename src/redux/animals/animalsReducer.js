import {
  FETCH_ANIMALS_REQUEST,
  FETCH_ANIMALS_SUCCESS,
  FETCH_ANIMALS_FAILURE
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
    default: return state
  }
}

export default reducer
