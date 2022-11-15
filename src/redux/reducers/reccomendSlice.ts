import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// categoryId型定義
interface ReccomendState {
  reccomendRecipeCategory: number
}

// categoryId初期値(30は人気メニューカテゴリー)
const initialState = {reccomendRecipeCategory: 30} as ReccomendState

//おすすめcategoryId用Slice
const reccomendRecipeSlice = createSlice({
  name: "reccomendRecipe",
  initialState,
  reducers: {
    setReccomendRecipe: (
      state = initialState,
      action: PayloadAction<number>
    ) => {
      state.reccomendRecipeCategory = action.payload;
    },
  },
});

export const { setReccomendRecipe } = reccomendRecipeSlice.actions;
export default reccomendRecipeSlice.reducer;
