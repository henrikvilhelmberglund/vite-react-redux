import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("postsSlice/getPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
});

const postSlice = createSlice({
  name: "postsSlice",
  initialState: { posts: [], status: null },
  reducers: {
    increment: (state, action) => {
      console.log(action);
      return null;
    },
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = "Loading...";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = "Success!";
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "Rejected";
    },
  },
});

// export const increment = postsSlice.actions.increment;
export const { increment } = postSlice.actions;

export default postSlice.reducer;
