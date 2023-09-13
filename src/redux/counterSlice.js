import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      console.log("incrementing by 1");
      state.count += 1;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
