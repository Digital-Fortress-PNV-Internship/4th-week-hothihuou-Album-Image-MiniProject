import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';
// devtoool dùng để debug theo dõi store, state, props,
const store = createStore(
  reducers,
  {},
  composeWithDevTools
    ( applyMiddleware(logger,thunk))
);

export default store;