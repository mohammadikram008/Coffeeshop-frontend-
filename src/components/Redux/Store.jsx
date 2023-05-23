import addReducer from "./Reducer";
import { combineReducers } from "redux";
const allReducer = combineReducers({
  counter: addReducer,
});

export default allReducer;
