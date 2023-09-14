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
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "Success!";
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.status = "Rejected";
      });
  },
});

// export const increment = postsSlice.actions.increment;
export const { increment } = postSlice.actions;

export default postSlice.reducer;
