//TODO 使うか不明
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// TODO 
// interface RecipeState {
//   recipeList: [];
// }

const initialState: any = {
  categoryList: [
    // TODO 内容修正
    {
      foodImageUrl: 'loading', 
      mediumImageUrl: 'loading', 
      nickname: 'loading',
      pickup: 1, 
       rank: 'loading'
} 
]}
// as RecipeState;

const categoryDataSlice = createSlice({
  name: "cateforyData",
  initialState,
  reducers: {
    setCategoryData: (
      state = initialState,
      action: PayloadAction<any>
    ) => {
      state.categoryList = action.payload;
    },
  },
});

export const { setCategoryData } = categoryDataSlice.actions;
export default categoryDataSlice.reducer;
