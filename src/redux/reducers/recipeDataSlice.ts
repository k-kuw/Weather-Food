import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Recipe } from "../../types";

// レシピ型定義
interface RecipeState {
  recipeList: Recipe[];
}

// レシピapi情報初期値
const initialState = {
  recipeList: [
    {
      foodImageUrl: "loading",
      mediumImageUrl: "loading",
      nickname: "loading",
      pickup: 0,
      rank: "loading",
      recipeCost: "loading",
      recipeDescription: "loading",
      recipeId: 0,
      recipeIndication: "loading",
      recipeMaterial: ["loading"],
      recipePublishday: "loading",
      recipeTitle: "loading...",
      recipeUrl: "loading",
      shop: 0,
      smallImageUrl: "loading",
    },
  ],
} as RecipeState;

//レシピapi情報用Slice
const recipeDataSlice = createSlice({
  name: "recipeData",
  initialState,
  reducers: {
    setRecipeData: (state = initialState, action: PayloadAction<Recipe[]>) => {
      state.recipeList = action.payload;
    },
  },
});

export const { setRecipeData } = recipeDataSlice.actions;
export default recipeDataSlice.reducer;
