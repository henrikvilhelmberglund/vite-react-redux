import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todoSlice from "./todoSlice";
import postSlice from "./postSlice";

const store = configureStore({
  reducer: {
    // reducer här
    counter: counterSlice,
    todo: todoSlice,
    posts: postSlice,
  },
});

export default store;
