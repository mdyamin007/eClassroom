import { combineReducers, createStore } from "redux";
import authReducer from "./auth";
import classReducer from "./class";

const rootReducer = combineReducers({ authReducer, classReducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
