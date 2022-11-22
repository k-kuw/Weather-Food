import { combineReducers } from "redux";
import weatherReducer from "./weatherDataSlice";
import timeReducer from "./timeSlice";
import reccomendRecipeReducer from "./reccomendSlice";
import recipeDataReducer from "./recipeDataSlice"

// Reducersをまとめる
const reducers = combineReducers({
  weatherReducer,
  timeReducer,
  reccomendRecipeReducer,
  recipeDataReducer
});

export default reducers;
