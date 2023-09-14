import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getActivity = createAsyncThunk(
  "postsSlice/getActivity",
  async ({ participants, type, free }) => {
    const API = `https://www.boredapi.com/api/activity?participants=${participants}${
      type !== "any" ? `&type=${type}` : ""
    }${free ? `&price=0.0` : ``}`;
    console.log(API);
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);
    return data;
  }
);
const boredSlice = createSlice({
  name: "boredSlice",
  initialState: { activity: {}, status: null },
  reducers: {
    increment: (state, action) => {
      console.log(action);
      return null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getActivity.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(getActivity.fulfilled, (state, action) => {
        state.status = "Success!";
        state.activity = action.payload;
      })
      .addCase(getActivity.rejected, (state) => {
        state.status = "Rejected";
      });
  },
});

export const { increment } = boredSlice.actions;
export default boredSlice.reducer;
