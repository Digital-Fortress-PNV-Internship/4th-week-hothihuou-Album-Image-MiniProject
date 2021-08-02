import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/userReducer'
import travelsReducer from './travels/travelsReducer';
import animalsReducer from './animals/animalsReducer';
import flowersReducer from './flowers/flowersReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  
  animal:animalsReducer,
  travel:travelsReducer,
  flower: flowersReducer,
  user: userReducer
})

export default rootReducer
