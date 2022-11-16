import { combineReducers } from "redux";
import weatherReducer from "./weatherDataSlice";
import timeReducer from "./timeSlice";
import recipeReducer from "./recipeDataSlice";
import reccomendRecipeReducer from "./reccomendSlice";

// Reducersをまとめる
const reducers = combineReducers({
  weatherReducer,
  timeReducer,
  recipeReducer,
  reccomendRecipeReducer,
});

export default reducers;
