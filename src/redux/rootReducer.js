import { combineReducers } from 'redux'

import userReducer from './user/userReducer'
import travelsReducer from './travels/travelsReducer';
import animalsReducer from './animals/animalsReducer';
import flowersReducer from './flowers/flowersReducer';

const rootReducer = combineReducers({
  animal: animalsReducer,
  travel: travelsReducer,
  flower: flowersReducer,
  user: userReducer
})

export default rootReducer
