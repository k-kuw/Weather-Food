import { combineReducers } from "redux";
import weatherReducer from "./weatherDataSlice";
import timeReducer from "./timeSlice copy";

const reducers = combineReducers({
  weatherReducer,
  timeReducer,
});

export default reducers;
