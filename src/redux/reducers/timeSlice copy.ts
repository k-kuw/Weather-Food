import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type {RootState} from './store'

interface TimeState {
  time: string;
}

const initialState = {
  time: "loading",
} as TimeState;

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
