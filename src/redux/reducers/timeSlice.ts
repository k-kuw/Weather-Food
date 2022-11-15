import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type {RootState} from './store'

// 時間型定義
interface TimeState {
  time: string;
}

// 選択した時間初期値
const initialState = {
  time: "loading",
} as TimeState;

// 選択した時間用Slice
const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    setTime: (state = initialState, action: PayloadAction<string>) => {
      state.time = action.payload;
    },
  },
});

export const { setTime } = timeSlice.actions;
export default timeSlice.reducer;
