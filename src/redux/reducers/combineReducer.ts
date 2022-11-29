import { combineReducers } from "redux";
import weatherReducer from "./weatherDataSlice";
import timeReducer from "./timeSlice";
import reccomendRecipeReducer from "./reccomendSlice";
import recipeDataReducer from "./recipeDataSlice"
import locationReducer from "./locationSlice"

// Reducersをまとめる
const reducers = combineReducers({
  weatherReducer,
  timeReducer,
  reccomendRecipeReducer,
  recipeDataReducer,
  locationReducer
});

export default reducers;
